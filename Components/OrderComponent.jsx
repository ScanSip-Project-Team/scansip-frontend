import ProductOrder from "./ProductOrder";
import SumUpOrder from "./SumUpOrder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const OrderComponent = ({
  element,
  handleOrderStatus,
  setIsOrderInProgress,
  isOrderInProgress,
}) => {
  return (
    <div className="mb-4 flex gap-5 rounded  bg-slate-100 p-4">
      <div
        className="flex  h-3/6 w-2/3 
        flex-col gap-5"
      >
        <h3 className="font-semibold">Commande n° : {element.order_number}</h3>

        {element.product_list.map((product) => {
          return <ProductOrder key={product._id} product={product} />;
        })}
      </div>

      <SumUpOrder
        element={element}
        handleOrderStatus={handleOrderStatus}
        setIsOrderInProgress={setIsOrderInProgress}
        isOrderInProgress={isOrderInProgress}
      />
    </div>
  );
};
export default OrderComponent;
