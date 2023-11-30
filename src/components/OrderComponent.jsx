import ProductOrder from "./ProductOrder";

import SumUpOrder from "./SumUpOrder";

const OrderComponent = ({
  setIsOrderInProgress,
  isOrderInProgress,

  element,
}) => {
  return (
    <div className="mb-4 rounded  bg-slate-100 p-4">
      <div className="flex justify-between pl-4 pr-4">
        <h3 className="mb-2 font-semibold">
          Commande n° : {element.order_number}
        </h3>
      </div>
      <div className="flex h-auto flex-col  gap-5 md:flex-row">
        <div
          className={`mb-4 flex w-full flex-col gap-5 rounded bg-slate-100 p-4 lg:flex-row`}
        >
          <div className="flex flex-col gap-5 lg:w-2/3">
            {element.product_list.map((product) => {
              console.log("product from order ==>", product);
              return <ProductOrder key={product._id} product={product} />;
            })}
          </div>
          <SumUpOrder
            element={element}
            setIsOrderInProgress={setIsOrderInProgress}
            isOrderInProgress={isOrderInProgress}
          />
        </div>
      </div>
    </div>
  );
};
export default OrderComponent;
