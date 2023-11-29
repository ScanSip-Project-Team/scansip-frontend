import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Import components
import OrderComponent from "../../Components/OrderComponent";
import OrderComponentDelivered from "../../Components/OrderComponentDelivered";
//Import Assets

const Orders = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [isOrderInProgress, setIsOrderInProgress] = useState(true);
  const [isDropDown, setIsDropDown] = useState(false);

  const handleOrderStatus = async (id, status) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/orders/${id}/${status}`,
      );
    } catch (error) {
      console.log(error);
    }
    console.log("CLICK to order id ==>", id);
  };
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
  }, [isOrderInProgress]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="container m-auto h-screen">
      <h1 className="border-b border-solid border-black p-6 text-3xl">
        Service 🔥
      </h1>

      <div className="flex h-full  pt-8">
        {/* Column ORDERS IN PROGRESS */}
        <div className="h-full w-2/3 border-r-2 p-3">
          <h2 className="mb-4 font-medium">Commandes en cours :</h2>

          {data.map((element) => {
            if (element.order_status === "in progress") {
              return (
                <OrderComponent
                  key={element._id}
                  element={element}
                  handleOrderStatus={handleOrderStatus}
                  setIsOrderInProgress={setIsOrderInProgress}
                  isOrderInProgress={isOrderInProgress}
                />
              );
            }
          })}
        </div>
        {/* ORDERS DELIVERED */}
        <div className="h-full w-1/3 p-3">
          <h2 className="mb-4 font-medium">Commandes servies :</h2>

          {data.map((element) => {
            if (element.order_status === "delivered") {
              return (
                <OrderComponentDelivered
                  key={element._id}
                  element={element}
                  handleOrderStatus={handleOrderStatus}
                  setIsOrderInProgress={setIsOrderInProgress}
                  isOrderInProgress={isOrderInProgress}
                  isDeliveredOrder={true}
                  isDropDown={isDropDown}
                  setIsDropDown={setIsDropDown}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default Orders;
