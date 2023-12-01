import { useState } from "react";
import axios from "axios";
import Button from "./Button";
import baseApiURL from "../api";
const SumUpOrder = ({ element, setIsOrderInProgress, isOrderInProgress }) => {
  const handleOrderDelivered = async (id) => {
    try {
      const status = "delivered";
      const response = await axios.put(`${baseApiURL}/orders/${id}/${status}`);

      setIsOrderInProgress(!isOrderInProgress);
    } catch (error) {
      console.log(error);
    }
    console.log("CLICK to order id ==>", id);
  };

  return (
    <div
      className="w-3/3 h-3/3 flex flex-col gap-6 
        lg:w-1/3"
    >
      <h3 className="font-bold">Récapitulatif :</h3>
      <div className="flex flex-row justify-between lg:flex-col">
        <div className="flex flex-1 flex-col gap-3">
          <span className="text-sm ">
            Nombres d'article :
            <span className="font-semibold"> {element.total_items}</span>
          </span>
          <span className="text-sm ">
            Statut :<span className="font-semibold"> En cours</span>
          </span>
        </div>
        <div className="flex  flex-1 flex-col gap-3">
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
        </div>
      </div>

      <Button
        func={handleOrderDelivered}
        elementId={element._id}
        className={"btn-primary"}
        text={"Commande servie"}
      />
    </div>
  );
};
export default SumUpOrder;
