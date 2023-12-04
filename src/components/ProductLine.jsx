import ButtonQuantity from "./ButtonQuantity";

const ProductLine = (props) => {
  const { item, setOpenModal, setProductID, cart, setCart, setTotal, total } =
    props;

  const handleClickMinus = (item) => {
    if (item.quantity !== 1) {
      // je cherche le produit dans le panier
      const productToFind = cart.find((e) => e._id === item._id);

      const indexOfProduct = cart.indexOf(productToFind);
      // et je diminue sa quantité de 1
      const cartCopy = [...cart];
      cartCopy[indexOfProduct].quantity = cart[indexOfProduct].quantity - 1;
      setCart(cartCopy);
      setTotal(total - Number(item.product_price));
    } else {
      // je cherche le produit dans le panier
      const productToFind = cart.find((e) => e._id === item._id);

      const indexOfProduct = cart.indexOf(productToFind);
      // et je le supprime du panier
      const cartCopy = [...cart];
      cartCopy.splice(indexOfProduct, 1);
      setCart(cartCopy);
      delete item.quantity;
      setTotal(total - Number(item.product_price));
    }
  };

  const handleClickPlus = (item) => {
    // je vérifie si le produit est déjà dans le panier
    const productToFind = cart.find((e) => e._id === item._id);

    // s'il n'est pas dans le panier, je lui ajoute une clé quantité et je le push dans le panier

    if (productToFind === undefined) {
      const cartCopy = [...cart];
      item.quantity = 1;
      cartCopy.push(item);
      setCart(cartCopy);
      setTotal(total + Number(item.product_price));
    }
    // s'il est déjà dans le panier j'augmente la quantité de 1
    else {
      const indexOfProduct = cart.indexOf(productToFind);
      const cartCopy = [...cart];
      cartCopy[indexOfProduct].quantity = cart[indexOfProduct].quantity + 1;
      setCart(cartCopy);
      setTotal(total + Number(item.product_price));
    }
  };

  return (
    <>
      <div className="border-lightgrey  flex h-[63px] items-center justify-start border-b p-[5px] pr-1 text-sm">
        <div className="flex h-full w-2/6 justify-center">
          <img
            className="h-full  rounded-[5px] bg-[#F3F3F3] object-cover"
            src={item.product_image.secure_url}
            alt="product"
            onClick={() => {
              if (setProductID && setProductID) {
                setOpenModal(true);
                setProductID(item._id);
              }
            }}
          />
        </div>
        <div className="w-4/6  pl-2">
          <p className="title-product text-sm font-medium">
            {item.product_name}
          </p>
          <p className="price-product text-xs font-normal ">
            {item.product_price.toFixed(2)} €
          </p>
        </div>
        <div>
          {item.quantity ? (
            <div className="flex h-[23px] w-16 items-center justify-center rounded-[20px] bg-[#E8E8E8] p-1.5 text-[10px]">
              <ButtonQuantity text={"-"} func={() => handleClickMinus(item)} />
              <p> {item.quantity}</p>
              <ButtonQuantity text={"+"} func={() => handleClickPlus(item)} />
            </div>
          ) : (
            <div className="flex w-16 items-center justify-center p-1.5">
              <ButtonQuantity text={"+"} func={() => handleClickPlus(item)} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductLine;
