import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
import { Toaster } from "sonner";
import { toast } from "sonner";
import Cookies from "js-cookie";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Import Components
import OrderComponent from "../components/OrderComponent";
import OrderComponentDelivered from "../components/OrderComponentDelivered";
import Header from "../components/HeaderNav/Header";
import baseApiURL from "../api";
import Loader from "../components/Loader";
import HeaderMobile from "../components/HeaderNav/HeaderMobile";
import { RefreshComponent } from "../utils/RefreshComponent";

//Import Assets

const Orders = ({ adminToken, setAdminToken }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [isOrderUpdated, setIsOrderUpdated] = useState(true);
  // const [refresh, setRefresh] = useState(false);

  const [counter, setCounter] = useState(0);

  const navigate = useNavigate();

  //We reload the page every 30 seconds in order to fetch new orders if exist

  //UPDATE ORDER DELIVERED isEnabled ==> false
  const handleOdersIsEnabled = async () => {
    try {
      const response = await axios.put(`${baseApiURL}/orders`);

      if (response.status === 200) {
        toast.success("La liste a bien été vidée 👍!!");
      } else {
        toast.error("😕 La liste n'a pas pu être vidée! Ressayez 😉!");
      }

      setIsOrderUpdated(!isOrderUpdated);
      console.log("UPDATE!!!!");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log("1er useEffect avant if");
    // console.log("data.length before axios=>", data.length);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseApiURL}/orders`);
        // console.log("response commandes ==> ", response.data);
        // console.log("refresh");

        //if response.data il bigger thant data it means that we have a new order
        //if so, we trigger a message toast for the waiter
        if (data.length < response.data.length) {
          const toastId = toast("Vous avez une nouvelle commande 🔥🔥");
          toast.dismiss(toastId);
        }
        // setData(response.data.reverse());
        setData(response.data);
        // console.log("response.data.length after axios=>", response.data.length);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOrderUpdated, counter, adminToken]);

  // useEffect(() => {
  //   //If first useEffect has been done and data fetched we run the second useEffect
  //   if (!isLoading) {
  //     refreshPage();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLoading]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {isLoading === false && <RefreshComponent setCounter={setCounter} />}
      <Header adminToken={adminToken} setAdminToken={setAdminToken} />
      <HeaderMobile adminToken={adminToken} setAdminToken={setAdminToken} />

      <div className="container m-auto h-screen">
        <div>
          <Toaster />
        </div>

        <h1 className="border-b border-solid border-black p-6 text-3xl">
          Service 🔥 {counter}
        </h1>

        <div className="flex h-auto flex-col pt-8 md:flex-row">
          <div className="w-3/3 h-auto p-3 md:w-2/4 md:border-r-2 lg:w-2/3 ">
            <h2 className="primary-color mb-4">
              Vous avez{" "}
              <span className="font-bold">
                {
                  data.filter((element) => element.order_status === "paid")
                    .length
                }
              </span>{" "}
              commandes payées en cours
            </h2>

            {data
              .sort((a, b) => {
                return a.order_number - b.order_number;
              })
              .map((element) => {
                if (element.order_status === "paid") {
                  return (
                    <OrderComponent
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

          <div className="w-3/3 h-full p-3 md:w-2/4 lg:w-1/3">
            <h2 className="mb-4 flex items-center justify-between font-medium">
              Commandes servies :{" "}
              {
                data.filter((element) => element.order_status === "delivered")
                  .length
              }
              {data.filter((element) => element.order_status === "delivered")
                .length > 0 && (
                <span
                  onClick={() => {
                    handleOdersIsEnabled();
                  }}
                  className="primary-color text-sm"
                >
                  vider la liste
                </span>
              )}
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
