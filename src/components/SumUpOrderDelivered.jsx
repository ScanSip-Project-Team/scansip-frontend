const SumUpOrderDelivered = ({
  element,
  handleOrderStatus,
  setIsOrderInProgress,
  isOrderInProgress,
}) => {
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
            Statut :
            <span className="font-semibold"> {element.order_status}</span>
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
      <button
        onClick={() => {
          const orderStatus =
            element.order_status === "delivered" ? "in progress" : "delivered";
          handleOrderStatus(element._id, orderStatus);
          setIsOrderInProgress(!isOrderInProgress);
        }}
        className={`m-auto ${
          element.order_status === "in progress" ? "btn-primary" : "btn-black"
        }`}
      >
        Commande servie
      </button>
    </div>
  );
};
export default SumUpOrderDelivered;
