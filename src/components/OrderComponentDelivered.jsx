import { useState } from "react";
import ProductOrder from "./ProductOrder";
import SumUpOrderDelivered from "./SumUpOrderDelivered";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OrderComponentDelivered = ({
  element,
  handleOrderStatus,
  handleDropDown,
  handleDropUp,
  setIsOrderInProgress,
  isOrderInProgress,
  isDropDown,
  targetDropDown,
  displayIconDown,
  displayIconUp,
}) => {
  console.log("targetDropDown=>", targetDropDown);
  return (
    <div
      className={`mb-4 flex  flex-col gap-5 rounded bg-slate-200 p-4  ${
        isDropDown && targetDropDown.includes(element._id)
          ? "h-auto overflow-auto"
          : "h-16 overflow-hidden"
      }`}
    >
      <div className="flex  flex-col gap-5">
        <div className="flex justify-between">
          <h3 className="mb-2 font-semibold">
            Commande n° : {element.order_number}
          </h3>
          <FontAwesomeIcon
            className={`cursor-pointer ${displayIconDown}`}
            onClick={() => {
              handleDropDown(element._id);
            }}
            icon="fa-solid fa-chevron-down"
          />
          <FontAwesomeIcon
            className={`cursor-pointer ${displayIconUp}`}
            onClick={() => {
              handleDropUp(element._id);
            }}
            icon="fa-solid fa-chevron-up"
          />
        </div>

        {element.product_list.map((product) => {
          return <ProductOrder key={product._id} product={product} />;
        })}
      </div>

      <SumUpOrderDelivered
        element={element}
        handleOrderStatus={handleOrderStatus}
        setIsOrderInProgress={setIsOrderInProgress}
        isOrderInProgress={isOrderInProgress}
      />
    </div>
  );
};
export default OrderComponentDelivered;
