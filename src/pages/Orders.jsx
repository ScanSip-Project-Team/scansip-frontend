import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Import components
import OrderComponent from "../components/OrderComponent";
import OrderComponentDelivered from "../components/OrderComponentDelivered";
// import OrderComponent_test from "../components/OrderComponent";
//Import Assets

const Orders = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [isOrderInProgress, setIsOrderInProgress] = useState(true);
  const [isDropDown, setIsDropDown] = useState(false);
  const [targetDropDown, setTargetDropDown] = useState([]);
  const [displayIconDown, setDisplayIconDown] = useState("block");
  const [displayIconUp, setDisplayIconUp] = useState("hidden");

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

  const handleDropDown = (id) => {
    const cloneTargetDropDown = [...targetDropDown];
    setIsDropDown(!isDropDown);
    setDisplayIconDown("hidden");
    setDisplayIconUp("block");
    cloneTargetDropDown.push(id);
    setTargetDropDown(cloneTargetDropDown);
  };
  const handleDropUp = (id) => {
    const cloneTargetDropDown = [...targetDropDown];
    const index = cloneTargetDropDown.indexOf(id);
    setIsDropDown(!isDropDown);

    setDisplayIconDown("block");
    setDisplayIconUp("hidden");
    cloneTargetDropDown.splice(index, 1);
    setTargetDropDown(cloneTargetDropDown);
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

      <div className="flex h-auto flex-col pt-8 md:flex-row">
        {/* Column ORDERS IN PROGRESS */}
        <div className="w-3/3 h-auto p-3 md:w-2/4 md:border-r-2 lg:w-2/3 ">
          <h2 className="primary-color mb-4 font-bold">Commandes en cours :</h2>

          {data.map((element, index) => {
            if (element.order_status === "in progress") {
              return (
                <>
                  <OrderComponent
                    key={element._id}
                    element={element}
                    handleOrderStatus={handleOrderStatus}
                    setIsOrderInProgress={setIsOrderInProgress}
                    isOrderInProgress={isOrderInProgress}
                    // isDropDown={isDropDown}
                    // setIsDropDown={setIsDropDown}
                    // targetDropDown={targetDropDown}
                    // setTargetDropDown={setTargetDropDown}
                  />
                  {/* <OrderComponent
                    key={element.index}
                    element={element}
                    handleOrderStatus={handleOrderStatus}
                    setIsOrderInProgress={setIsOrderInProgress}
                    isOrderInProgress={isOrderInProgress}
                    isDropDown={isDropDown}
                    setIsDropDown={setIsDropDown}
                  /> */}
                </>
              );
            }
          })}
        </div>
        {/* ORDERS DELIVERED */}
        <div className="w-3/3 h-full p-3 md:w-2/4 lg:w-1/3">
          <h2 className="mb-4 font-medium">Commandes servies :</h2>

          {data.map((element) => {
            if (element.order_status === "delivered") {
              return (
                // <OrderComponent_test
                //   key={element._id}
                //   element={element}
                //   handleOrderStatus={handleOrderStatus}
                //   setIsOrderInProgress={setIsOrderInProgress}
                //   isOrderInProgress={isOrderInProgress}
                //   isDropDown={isDropDown}
                //   setIsDropDown={setIsDropDown}
                // />

                <OrderComponentDelivered
                  key={element._id}
                  element={element}
                  handleOrderStatus={handleOrderStatus}
                  handleDropDown={handleDropDown}
                  handleDropUp={handleDropUp}
                  setIsOrderInProgress={setIsOrderInProgress}
                  isOrderInProgress={isOrderInProgress}
                  isDropDown={isDropDown}
                  setIsDropDown={setIsDropDown}
                  targetDropDown={targetDropDown}
                  setTargetDropDown={setTargetDropDown}
                  displayIconDown={displayIconDown}
                  displayIconUp={displayIconUp}
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
