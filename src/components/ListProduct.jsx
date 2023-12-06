import ProductLine from "./ProductLine";

const ListProduct = (props) => {
  const {
    data,
    setOpenModal,
    setProductID,
    cart,
    setCart,
    setTotal,
    total,
    id,
    icon,
    title,
  } = props;
  return (
    <>
      <div
        id={id}
        className=" border-grey-500 w-full scroll-mt-28 border-y px-[5px] "
      >
        <div className="flex justify-center ">
          <div className="border-lightgrey flex w-full justify-start border-b  ">
            {title && (
              <div className="mx-[5px] my-6 flex items-center gap-2">
                <h1 className="title-category">Découvrez nos {title} !</h1>
                <img className=" w-10" src={icon} alt={id} />
              </div>
            )}
          </div>
        </div>
        {data.map((item) => (
          <ProductLine
            key={item._id}
            item={item}
            setOpenModal={setOpenModal}
            setProductID={setProductID}
            cart={cart}
            setCart={setCart}
            setTotal={setTotal}
            total={total}
          />
        ))}
      </div>
    </>
  );
};

export default ListProduct;
