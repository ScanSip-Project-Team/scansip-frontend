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
    cartProductsStorage,
    setCartProductsStorage,
    cartTotalStorage,
    setCartTotalStorage,
    id,
    icon,
    title,
  } = props;
  return (
    <>
      <div id={id} className="w-full scroll-mt-28 px-[5px]">
        <div className="flex justify-center ">
          <div className="flex w-full justify-start ">
<<<<<<< HEAD
            <div className="my-6 flex items-center gap-2">
              <h1 className="title-category">Découvrez nos {title} !</h1>
              <img className="w-12 object-contain" src={icon} alt={id} />
            </div>
=======
            {title && (
              <div className="mx-[5px] my-6 flex items-center gap-2">
                <h1 className="title-category">Découvrez nos {title} !</h1>
                <img src={icon} alt={id} />
              </div>
            )}
>>>>>>> main
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
            cartProductsStorage={cartProductsStorage}
            setCartProductsStorage={setCartProductsStorage}
            cartTotalStorage={cartTotalStorage}
            setCartTotalStorage={setCartTotalStorage}
          />
        ))}
      </div>
    </>
  );
};

export default ListProduct;
