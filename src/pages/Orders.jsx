import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Import components
import OrderComponent from "../components/OrderComponent";
import OrderComponentDelivered from "../components/OrderComponentDelivered";
import Header from "../components/Header";
import baseApiURL from "../api";
import Loader from "../components/Loader";

//Import Assets

const Orders = ({ adminToken, setAdminToken }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [isOrderUpdated, setIsOrderUpdated] = useState(true);
  const [refresh, setRefresh] = useState(false);
  // const [token, setToken] = useState("scanSip");
  const [counter, setCounter] = useState(0);
  const [triggerToast, setTriggerToast] = useState(false);

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

  //run the toast message et set the trigger state false to reinitiate the toastState
  const triggerToastFunc = () => {
    // toast.success("Vous avez une nouvelle commande!");
    toast((t) => (
      <span>
        Vous avez une nouvelle <b>commande 🔥🔥</b>
        <button
          className="rounded-md bg-green-500 p-2 text-center text-white"
          onClick={() => toast.dismiss(t.id)}
        >
          OK
        </button>
      </span>
    ));
    setTriggerToast(false);
  };

  //UPDATE ORDER DELIVERED isEnabled ==> false
  const handleOdersIsEnabled = async () => {
    try {
      toast.promise(axios.put(`${baseApiURL}/orders`), {
        loading: "...",
        success: <b>Liste vidée 👍! </b>,
        error: <b>😕 La liste n'a pas pu être vidée! Ressayez 😉!.</b>,
      });
      setIsOrderUpdated(!isOrderUpdated);
      console.log("UPDATE!!!!");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("1er useEffect avant if");
    console.log("data.length before axios=>", data.length);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseApiURL}/orders`);
        console.log("response ==> ", response.data);
        console.log("refresh");
        console.log("data.length after axios=>", data.length);

        //if response.data il bigger thant data it means that we have a new order
        //if so, we trigger a message toast for the waiter
        if (data.length < response.data.length) {
          setTriggerToast(true);
        }
        // setData(response.data.reverse());
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
  }, [isOrderUpdated, counter, adminToken]);

  useEffect(() => {
    console.log("2ème useEffect avant if");
    //If first useEffect has been done and data fetched we run the second useEffect
    if (!isLoading) {
      console.log("2ème useEffect dans if ", counter);
      refreshPage();
    }
  }, [isLoading]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Header setAdminToken={setAdminToken} />

      <div className="container m-auto h-screen">
        <div>
          <Toaster />
        </div>
        {triggerToast && triggerToastFunc()}
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
              </span>
              commandes en cours
            </h2>

            {data.map((element) => {
              if (element.order_status === "in progress") {
                return (
                  <>
                    <OrderComponent
                      key={element._id}
                      element={element}
                      setIsOrderUpdated={setIsOrderUpdated}
                      isOrderUpdated={isOrderUpdated}
                    />
                  </>
                );
              }
              return null;
            })}
          </div>
          {/* ORDERS DELIVERED */}
          <div className="w-3/3 h-full p-3 md:w-2/4 lg:w-1/3">
            <h2 className="mb-4 flex items-center justify-between font-medium">
              Commandes servies :{" "}
              {
                data.filter((element) => element.order_status === "delivered")
                  .length
              }
              <span
                onClick={() => {
                  handleOdersIsEnabled();
                }}
                className="primary-color text-sm"
              >
                vider la liste
              </span>
            </h2>

            {data
              .sort((a, b) => {
                return b.order_number - a.order_number;
              })
              .map((element) => {
                if (element.order_status === "delivered") {
                  return (
                    <OrderComponentDelivered
                      key={element._id}
                      element={element}
                      setIsOrderUpdated={setIsOrderUpdated}
                      isOrderUpdated={isOrderUpdated}
                    />
                  );
                }
                return null;
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Orders;
