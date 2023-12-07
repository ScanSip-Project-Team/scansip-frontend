const SumUpOrderHistory = ({ element }) => {
  return (
    <div
      className="w-3/3 h-3/3 flex flex-col gap-6 
        lg:w-1/3"
    >
      <h3 className="font-bold">Récapitulatif :</h3>
      <div className="flex flex-col justify-between">
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
          <span className="text-sm "></span>
          <span className="mb-4 text-sm ">
            Prix :{" "}
            <span className="font-semibold">
              {element.total_price.toFixed(2)} €
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default SumUpOrderHistory;
