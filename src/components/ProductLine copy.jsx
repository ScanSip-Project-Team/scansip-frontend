import { useState } from "react";
import ButtonQuantity from "./ButtonQuantity";

const ProductLine = (props) => {
  const {
    item,
    setOpenModal,
    setProductID,
    cart,
    setCart,
    setTotal,
    total,
    cartStorage,
    setCartStorage,
  } = props;

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

      //update sessionStorage
      //parse carteStorage to Obj
      const storageArray = JSON.parse(cartStorage);

      //find the product to update inside the array
      for (const product of storageArray) {
        if (productToFind._id === product._id) {
          product.quantity += 1;
        }
      }

      setCart(cartCopy);
      setTotal(total + Number(item.product_price));
    }
  };

  return (
    <>
      <div className="flex  items-center justify-start border border-gray-300 bg-[#F3F3F3] pr-1 text-sm">
        <div className="w-2/6">
          <img
            className="h-20 w-20   rounded-sm bg-[#F3F3F3]"
            src={item.product_image.secure_url}
            alt="product"
            // Yohann code -----------------------------
            onClick={() => {
              setOpenModal(true);
              setProductID(item._id);
            }}
            // Yohann code -----------------------------
          />
        </div>
        <div className="w-4/6  pl-2">
          <p className="title-product ">{item.product_name}</p>{" "}
          <p className="price-product">{item.product_price} €</p>
        </div>
        <div>
          {item.quantity ? (
            <div className="flex w-24 items-center justify-center gap-2  rounded-full bg-[#E8E8E8] p-1.5">
              <ButtonQuantity text={"-"} func={() => handleClickMinus(item)} />
              <p> {item.quantity}</p>
              <ButtonQuantity text={"+"} func={() => handleClickPlus(item)} />
            </div>
          ) : (
            <div className="flex w-24 items-center justify-center gap-2 p-1.5">
              <ButtonQuantity text={"+"} func={() => handleClickPlus(item)} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductLine;
