import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Import components
import OrderComponent from "../components/OrderComponent";
import OrderComponentDelivered from "../components/OrderComponentDelivered";
import Header from "../components/Header";
import baseApiURL from "../api";
import Cookies from "js-cookie";

//Import Assets

const Orders = ({ adminToken, setAdminToken }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [isOrderInProgress, setIsOrderInProgress] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [token, setToken] = useState("scanSip");
  const [counter, setCounter] = useState(0);

  const navigate = useNavigate();

  //We reload the page every 30 seconds in order to fetch new orders if exist
  let action;
  const refreshPage = () => {
    action = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
      console.log("refresh function!");
      setRefresh(!refresh);
    }, 30000);

    return () => clearInterval(action);
  };

  useEffect(() => {
    console.log("1er useEffect avant if");
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseApiURL}/orders`);
        console.log("response ==> ", response.data);
        console.log("refresh");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (!adminToken) {
      if (Cookies.get("scanSipToken")) {
        setAdminToken(Cookies.get("scanSipToken"));
      } else {
        navigate("/admin/signin");
      }
    } else {
      fetchData();
    }
  }, [isOrderInProgress, counter, adminToken]);

  useEffect(() => {
    console.log("2ème useEffect avant if");
    //If first useEffect has been done and data fetched we run the second useEffect
    if (!isLoading) {
      console.log("2ème useEffect dans if ", counter);
      refreshPage();
    }
  }, [isLoading]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <Header setAdminToken={setAdminToken} />
      <div className="container m-auto h-screen">
        <h1 className="border-b border-solid border-black p-6 text-3xl">
          Service 🔥 {counter}
        </h1>

        <div className="flex h-auto flex-col pt-8 md:flex-row">
          {/* Column ORDERS IN PROGRESS */}
          <div className="w-3/3 h-auto p-3 md:w-2/4 md:border-r-2 lg:w-2/3 ">
            <h2 className="primary-color mb-4">
              Vous avez{" "}
              <span className="font-bold">
                {
                  data.filter(
                    (element) => element.order_status === "in progress",
                  ).length
                }
              </span>{" "}
              commandes en cours
            </h2>

            {data.map((element) => {
              if (element.order_status === "in progress") {
                return (
                  <>
                    <OrderComponent
                      key={element._id}
                      element={element}
                      setIsOrderInProgress={setIsOrderInProgress}
                      isOrderInProgress={isOrderInProgress}
                    />
                  </>
                );
              }
            })}
          </div>
          {/* ORDERS DELIVERED */}
          <div className="w-3/3 h-full p-3 md:w-2/4 lg:w-1/3">
            <h2 className="mb-4 font-medium">
              Commandes servies :{" "}
              {
                data.filter((element) => element.order_status === "delivered")
                  .length
              }
            </h2>

            {data.map((element) => {
              if (element.order_status === "delivered") {
                return (
                  <OrderComponentDelivered
                    key={element._id}
                    element={element}
                    setIsOrderInProgress={setIsOrderInProgress}
                    isOrderInProgress={isOrderInProgress}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Orders;
