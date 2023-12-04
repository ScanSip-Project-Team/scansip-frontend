// Import Package
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Import Components
import Button from "../components/Button";
import BreadCrumb from "../components/Breadcrumb";

import baseApiURL from "../api";

const CartClient = ({ setCart, cart, setTotal, total }) => {
  const [isDisabled, setIsDisable] = useState(false);
  const [cartBeforePayment, setCartBeforePayment] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (total === 0) {
      navigate("/home");
    }
  }, [total]);

  const handleNavigateToHome = () => {
    navigate("/home");
  };

  const orderToSend = [];
  cart.forEach((e) => {
    orderToSend.push({ product: { _id: e._id }, quantity_cart: e.quantity });
  });

  // Création d'une commande
  const createOrder = async () => {
    try {
      setIsDisable(true);
      console.log(orderToSend);
      const response = await axios.post(
        `${baseApiURL}/order/new`,
        {
          product_list: orderToSend,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log(response.data);

      const orderId = response.data._id;

      navigate(`/paiement/${orderId}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Gestion du counter du cart
  const handleClickPlus = (elem) => {
    // je vérifie si le produit est déjà dans le panier
    const productToFind = cart.find((e) => e._id === elem._id);

    // s'il n'est pas dans le panier, je lui ajoute une clé quantité et je le push dans le panier
    if (productToFind === undefined) {
      const cartCopy = [...cart];
      elem.quantity = 1;
      cartCopy.push(elem);
      setCart(cartCopy);
      setTotal(total + Number(elem.product_price));
      console.log("cart >>>", cart);
    }
    // s'il est déjà dans le panier j'augmente la quantité de 1
    else {
      const indexOfProduct = cart.indexOf(productToFind);
      const cartCopy = [...cart];
      cartCopy[indexOfProduct].quantity = cart[indexOfProduct].quantity + 1;
      setCart(cartCopy);
      setTotal(total + Number(elem.product_price));
      //   console.log("cart >>>", cart);
    }
  };

  // Gestion du counter du cart
  const handleClickMinus = (elem) => {
    if (elem.quantity !== 1) {
      // je cherche le produit dans le panier
      const productToFind = cart.find((e) => e._id === elem._id);

      const indexOfProduct = cart.indexOf(productToFind);
      // et je diminue sa quantité de 1
      const cartCopy = [...cart];
      cartCopy[indexOfProduct].quantity = cart[indexOfProduct].quantity - 1;
      setCart(cartCopy);
      setTotal(total - Number(elem.product_price));
      console.log("cart >>>", cart);
    } else {
      // je cherche le produit dans le panier
      const productToFind = cart.find((e) => e._id === elem._id);

      const indexOfProduct = cart.indexOf(productToFind);
      // et je le supprime du panier
      const cartCopy = [...cart];
      cartCopy.splice(indexOfProduct, 1);
      setCart(cartCopy);
      delete elem.quantity;
      setTotal(total - Number(elem.product_price));
      console.log("cart >>>", cart);
    }
  };

  return (
    // <section className="flex w-screen flex-col ">
    <main className="padding-container flex h-screen flex-col items-center">
      <nav className="self-start">
        <BreadCrumb
          text={"Retourner à ma commande"}
          func={() => navigate("/home")}
        />
      </nav>

      <div className="mb-7 flex justify-center">
        <p className="font-bold">Mon panier</p>
      </div>

      <div className="flex flex-col items-center">
        {cart.map((elem) => {
          return (
            <div
              key={elem._id}
              className="flex w-11/12 items-center justify-start border border-gray-300 bg-[#F3F3F3]"
            >
              <img
                src={elem.product_image.secure_url}
                alt=""
                className="h-15 w-20 bg-[#F3F3F3]"
              />

              <div className="w-2/3">
                <p>{elem.product_name}</p>
                <p>{elem.product_price}€</p>
              </div>

              <div className="flex items-center justify-center gap-2  p-1.5">
                {elem.quantity > 1 ? (
                  <button
                    className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                    onClick={() => handleClickMinus(elem)}
                  >
                    -
                  </button>
                ) : (
                  ""
                )}
                <p>{elem.quantity}</p>
                <button
                  className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                  onClick={() => handleClickPlus(elem)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}

        <Button
          text={`Commande pour un total de ${total} €`}
          className={"my-6 w-11/12 rounded bg-black p-1.5 text-white"}
          func={createOrder}
          disabled={isDisabled}
        />

        <Button
          text={"Ajouter des articles"}
          className={
            "bg-greyAddArticlesButton w-11/12 rounded p-1.5 text-black"
          }
          func={handleNavigateToHome}
          disabled={isDisabled}
        />
      </div>
      {/* </section> */}
    </main>
  );
};

export default CartClient;
