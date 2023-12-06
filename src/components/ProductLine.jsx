import { useState } from "react";
import ButtonQuantity from "./ButtonQuantity";

const ProductLine = (props) => {
  const { item, setOpenModal, setProductID, cart, setCart, setTotal, total } =
    props;

  const handleClickMinus = (item) => {
    if (item.quantity !== 1) {
      console.log(" IF productToFind pas dans le panier");

      // je cherche le produit dans le panier
      const productToFind = cart.find((e) => e._id === item._id);

      const indexOfProduct = cart.indexOf(productToFind);
      // et je diminue sa quantité de 1
      const cartCopy = [...cart];
      cartCopy[indexOfProduct].quantity = cart[indexOfProduct].quantity - 1;
      setCart(cartCopy);
      setTotal(total - Number(item.product_price));

      console.log("cart >>>", cart);
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

      console.log("cart >>>", cart);
    }
  };

  const handleClickPlus = (item) => {
    console.log("cart length", cart);

    // je vérifie si le produit est déjà dans le panier
    const productToFind = cart.find((e) => e._id === item._id);

    // s'il n'est pas dans le panier, je lui ajoute une clé quantité et je le push dans le panier
    if (productToFind === undefined) {
      const cartCopy = [...cart];
      item.quantity = 1;
      cartCopy.push(item);
      setCart(cartCopy);
      setTotal(total + Number(item.product_price));

      console.log("cart >>>", cart);
    }
    // s'il est déjà dans le panier j'augmente la quantité de 1
    else {
      console.log(" ELSE clickPlus");
      const indexOfProduct = cart.indexOf(productToFind);
      const cartCopy = [...cart];
      cartCopy[indexOfProduct].quantity = cart[indexOfProduct].quantity + 1;

      setCart(cartCopy);
      setTotal(total + Number(item.product_price));

      console.log("cart >>>", cart);
    }
  };

  return (
    <>
      <div className="border-lightgrey  mb-2 flex h-[100px] items-center justify-start border-t p-[5px] pr-1 text-sm">
        <div className="flex h-full w-2/6 items-center justify-center ">
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
        <div className="w-3/6   pl-2">
          <p className="title-product text-sm font-medium">
            {item.product_name}
          </p>
          <p className="price-product text-xs font-normal ">
            {item.product_price.toFixed(2)} €
          </p>
        </div>
        <div className="flex w-1/6 justify-center  ">
          {item.quantity ? (
            <div>
              <div className="flex h-[36px] items-center justify-center rounded-[20px]  bg-[#E8E8E8] p-1.5 text-xs">
                <ButtonQuantity
                  text={"-"}
                  func={() => handleClickMinus(item)}
                />
                <p> {item.quantity}</p>

                <ButtonQuantity text={"+"} func={() => handleClickPlus(item)} />
              </div>
            </div>
          ) : (
            <div>
              <div className="mr-4 flex  h-[36px] items-center justify-center rounded-[20px]  p-1.5 text-xs">
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
