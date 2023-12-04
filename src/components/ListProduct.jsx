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
      <div id={id} className="w-11/12 scroll-mt-28">
        <div className="flex justify-center ">
          <div className="flex w-full justify-start ">
            <div className="my-6 flex items-center gap-2">
              <h1 className="title-category">Découvrez nos {title} !</h1>
              <img src={icon} alt={id} />
            </div>
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