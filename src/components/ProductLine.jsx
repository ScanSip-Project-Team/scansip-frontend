// Import Components
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
      const itemCopy = { ...item };
      itemCopy.quantity = 1;
      cartCopy.push(itemCopy);
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

  const itemInCart = cart.find((e) => e._id === item._id);

  return (
    <>
      <div className="border-lightgrey  text-s mb-2  flex h-[100px]  items-center     justify-start  border-t p-[5px] pl-1 pr-2">
        <div className="flex h-full w-3/12 items-center justify-between  ">
          <img
            className="h-20 w-20 rounded-sm bg-[#F3F3F3] object-cover "
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
        <div className="w-7/12     pl-2">
          <p className="title-product text-sm font-medium">
            {item.product_name}
          </p>
          <p className="price-product text-xs font-normal ">
            {item.product_price.toFixed(2)} €
          </p>
        </div>
        <div className="mr-1 flex w-2/12 justify-center ">
          {itemInCart?.quantity ? (
            <div className="flex justify-center">
              <div className="flex h-[38px] items-center  rounded-[20px]    bg-[#E8E8E8] p-1.5 text-xs">
                <ButtonQuantity
                  text={"-"}
                  func={() => handleClickMinus(item)}
                />
                <p> {itemInCart.quantity}</p>

                <ButtonQuantity text={"+"} func={() => handleClickPlus(item)} />
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="flex  h-[38px] items-center justify-center rounded-[20px]   p-1.5 text-xs">
                <ButtonQuantity text={"+"} func={() => handleClickPlus(item)} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductLine;
