import ProductOrder from "./ProductOrder";
import SumUpOrder from "./SumUpOrder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const OrderComponentDelivered = ({
  element,
  handleOrderStatus,
  setIsOrderInProgress,
  isOrderInProgress,
  setIsDropDown,
  isDropDown,
}) => {
  return (
    <div
      className={`mb-4 flex  flex-col gap-5 rounded bg-slate-100 p-4  ${
        isDropDown ? "h-auto overflow-auto" : "h-16 overflow-hidden"
      }`}
    >
      <div className="flex  flex-col gap-5">
        <div className="flex justify-between">
          <h3 className="mb-2 font-semibold">
            Commande n° : {element.order_number}
          </h3>
          <FontAwesomeIcon
            className="cursor-pointer"
            onClick={() => {
              setIsDropDown(!isDropDown);
              console.log(isDropDown);
            }}
            icon="fa-solid fa-chevron-down"
          />
        </div>

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
export default OrderComponentDelivered;
