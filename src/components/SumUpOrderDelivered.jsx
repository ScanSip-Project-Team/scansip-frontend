import { useState } from "react";
import axios from "axios";
import Button from "./Button";
import baseApiURL from "../api";
const SumUpOrderDelivered = ({
  element,
  setIsOrderInProgress,
  isOrderInProgress,
}) => {
  const handleOrderInProgress = async (id) => {
    try {
      const status = "in progress";
      const response = await axios.put(`${baseApiURL}/orders/${id}/${status}`);

      setIsOrderInProgress(!isOrderInProgress);
    } catch (error) {
      console.log(error);
    }
    console.log("CLICK to order id ==>", id);
  };
  return (
    <div
      className="w-3/3 flex h-auto flex-col 
      gap-6"
    >
      <h3>Récapitulatif :</h3>
      <div className="flex flex-row justify-between gap-2 p-3">
        <div className="flex flex-col gap-3">
          <span className="text-sm ">
            Nombres d'article :
            <span className="font-semibold"> {element.total_items}</span>
          </span>
          <span className="text-sm ">
            Statut :<span className="font-semibold"> Servie</span>
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-sm ">
            Nom (carte):
            <span className="font-semibold"> Tiktac </span>
          </span>
          <span className="mb-4 text-sm ">
            Prix :
            <span className="font-semibold">
              {element.total_price.toFixed(2)} €
            </span>
          </span>
        </div>
      </div>
      <Button
        func={handleOrderInProgress}
        elementId={element._id}
        className={"btn-black"}
        text={"Renvoyer en service"}
      />
    </div>
  );
};
export default SumUpOrderDelivered;
