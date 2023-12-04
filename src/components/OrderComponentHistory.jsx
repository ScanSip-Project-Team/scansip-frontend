import { useState } from "react";
import ProductOrder from "./ProductOrder";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SumUpOrderHistory from "./SumUpOrderHistory";

const OrderComponentHistory = ({
  element,

  setIsOrderUpdated,
  isOrderUpdated,
}) => {
  const [isDropDown, setIsDropDown] = useState(false);

  const handleDropDown = (id) => {
    setIsDropDown(!isDropDown);
  };

  return (
    <div
      className={`mb-4 flex  flex-col gap-5 rounded bg-slate-200 p-4  ${
        isDropDown ? "h-auto overflow-auto" : "h-16 overflow-hidden"
      }`}
    >
      <div className="flex  flex-col gap-5">
        <div className="">
          <h3
            onClick={() => {
              handleDropDown(element._id);
            }}
            className="mb-2 flex justify-between font-semibold"
          >
            Commande n° : {element.order_number}
            {!isDropDown ? (
              <FontAwesomeIcon
                className={`cursor-pointer `}
                icon="fa-solid fa-chevron-down"
              />
            ) : (
              <FontAwesomeIcon
                className={`cursor-pointer `}
                icon="fa-solid fa-chevron-up"
              />
            )}
          </h3>
        </div>

        {element.product_list.map((product) => {
          return <ProductOrder key={product._id} product={product} />;
        })}
      </div>

      <SumUpOrderHistory
        element={element}
        setIsOrderUpdated={setIsOrderUpdated}
        isOrderUpdated={isOrderUpdated}
      />
    </div>
  );
};
export default OrderComponentHistory;