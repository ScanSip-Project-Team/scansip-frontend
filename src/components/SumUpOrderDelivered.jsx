import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Button from "./Button";
import baseApiURL from "../api";
const SumUpOrderDelivered = ({
  element,
  setIsOrderUpdated,
  isOrderUpdated,
}) => {
  const handleUpdateOrder = async (id) => {
    try {
      const key = "order_status";
      const value = "paid";

      const response = await axios.put(
        `${baseApiURL}/orders/${id}/${key}/${value}`,
      );

      if (response.status === 200) {
        toast.success("La commande est renvoyée en service 👏👏 !");
      } else {
        toast.error("😕 La commande n'a pas pu être validé! Ressayez 😉!.<");
      }

      setIsOrderUpdated(!isOrderUpdated);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="w-3/3 flex h-auto flex-col 
      gap-6"
    >
      <div>
        <Toaster />
      </div>
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
          <span className="mb-4 text-sm ">
            Prix :
            <span className="font-semibold">
              {element.total_price.toFixed(2)} €
            </span>
          </span>
        </div>
      </div>
      <Button
        func={handleUpdateOrder}
        elementId={element._id}
        className={"btn-black p-2"}
        text={"Renvoyer en service"}
      />
    </div>
  );
};
export default SumUpOrderDelivered;
