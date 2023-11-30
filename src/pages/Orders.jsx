import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Import components
import OrderComponent from "../components/OrderComponent";
import OrderComponentDelivered from "../components/OrderComponentDelivered";
import Header from "../components/Header";

//Import Assets

const Orders = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [isOrderInProgress, setIsOrderInProgress] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [token, setToken] = useState("scanSip");
  const [counter, setCounter] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/orders`);
        console.log("response ==> ", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isOrderInProgress, refresh]);

  // {
  //   setInterval(() => {
  //     setRefresh(!refresh);
  //     setCounter(counter + 1);
  //     console.log("refresh! " + counter);
  //   }, 30000);
  // }
  if (!token) {
    return navigate("/home");
  } else {
    return isLoading ? (
      <p>Loading ...</p>
    ) : (
      <>
        <Header />
        <div className="container m-auto h-screen">
          <h1 className="border-b border-solid border-black p-6 text-3xl">
            Service 🔥
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

              {data.map((element, index) => {
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
                }{" "}
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
  }
};
export default Orders;
