import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Import components

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
                <div
                  key={element._id}
                  className="mb-4 flex gap-5 rounded  bg-slate-100 p-4"
                >
                  {/* col Order */}
                  <div className="flex h-3/6 w-2/3 flex-col gap-5 ">
                    <h3 className="font-semibold">
                      Commande n° : {element.order_number}
                    </h3>

                    {element.product_list.map((product) => {
                      {
                        /* Each Product*/
                      }
                      return (
                        <div
                          key={product.product._id}
                          className="flex items-center rounded bg-white p-3"
                        >
                          <img
                            className="w-16 pr-2"
                            src={product.product.product_image.secure_url}
                            alt=""
                          />
                          <div className="flex flex-1 flex-col">
                            <span>{product.product.product_name}</span>
                            <span>
                              {product.product.product_price.toFixed(2)} €
                            </span>
                          </div>
                          <span className="h-10 w-10 rounded-full bg-gray-400 p-2 text-center font-semibold">
                            {product.quantity_cart}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  {/* column sumup */}
                  <div className="flex h-3/6 w-1/3 flex-col gap-6 ">
                    <h3>Récapitulatif :</h3>
                    <div className="flex flex-col gap-2">
                      <span className="text-sm ">
                        Nombres d'article :
                        <span className="font-semibold">
                          {element.total_items}
                        </span>
                      </span>
                      <span className="text-sm ">
                        Statut :
                        <span className="font-semibold">
                          {element.order_status}
                        </span>
                      </span>
                      <span className="text-sm ">
                        Nom (carte):
                        <span className="font-semibold">Tiktac </span>
                      </span>
                      <span className="mb-4 text-sm ">
                        Prix :
                        <span className="font-semibold">
                          {element.total_price.toFixed(2)} €
                        </span>
                      </span>
                      <button
                        onClick={() => {
                          handleOrderStatus(element._id, "delivered");
                          setIsOrderInProgress(!isOrderInProgress);
                        }}
                        className="btn-primary"
                      >
                        Commande servie
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        {/* Column ORDERS DELIVERED */}
        <div className="h-full w-1/3 p-3">
          <h2 className="mb-4 font-medium">Commandes servies :</h2>

          {/* col order */}
          {data.map((element) => {
            if (element.order_status === "delivered") {
              return (
                <div
                  key={element._id}
                  className={`mb-4 flex  flex-col gap-5 rounded bg-slate-100 p-4  ${
                    isDropDown ? "h-auto overflow-auto" : "h-16 overflow-hidden"
                  }`}
                >
                  <div className="flex justify-between">
                    <h3 className="mb-2 font-semibold">
                      Commande n° : {element.order_number}
                    </h3>
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      onClick={() => {
                        setIsDropDown(!isDropDown);
                      }}
                      icon="fa-solid fa-chevron-down"
                    />
                  </div>
                  {/* Product*/}
                  {element.product_list.map((item) => {
                    return (
                      <div
                        key={item._id}
                        className="flex items-center rounded bg-white p-3"
                      >
                        <img
                          className="w-16 pr-2"
                          src={item.product.product_image.secure_url}
                          alt=""
                        />
                        <div className="flex flex-1 flex-col">
                          <span>{item.product.product_name}</span>
                          <span>{item.product.product_price.toFixed(2)} €</span>
                        </div>
                        <span className="h-10 w-10 rounded-full bg-gray-400 p-2 text-center font-semibold">
                          2
                        </span>
                      </div>
                    );
                  })}
                  {/* SUMUP*/}
                  <div className="flex h-3/6 flex-col gap-6 ">
                    <h3>Récapitulatif :</h3>
                    <div className="flex flex-col gap-2">
                      <span className="text-sm ">
                        Nombres d'article :
                        <span className="font-semibold">
                          {element.total_items}
                        </span>
                      </span>
                      <span className="text-sm ">
                        Statut :{" "}
                        <span className="font-semibold">
                          {element.order_status}{" "}
                        </span>
                      </span>
                      <span className="text-sm ">
                        Nom (carte):{" "}
                        <span className="font-semibold">Tiktac </span>
                      </span>
                      <span className="mb-4 text-sm ">
                        Prix :{" "}
                        <span className="font-semibold">
                          {element.total_price.toFixed(2)} €
                        </span>
                      </span>
                      <button
                        onClick={() => {
                          handleOrderStatus(element._id, "in progress");
                          setIsOrderInProgress(!isOrderInProgress);
                        }}
                        className="btn-black m-auto"
                      >
                        Remettre en service
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default Orders;
