// Import Package
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

//Import Components
import Button from "../components/Button";

const CartClient = ({ setCart, cart, setTotal, total }) => {
  const [isDisabled, setIsDisable] = useState(false);

  // console.log(total);
  const navigate = useNavigate();

  useEffect(() => {
    if (total === 0) {
      navigate("/home");
    }
  }, [total]);

  const handleNavigateToHome = () => {
    navigate("/home");
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
        "http://localhost:3000/order/new",
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

      Cookies.set("orderToModify", response.data._id);

      const orderId = response.data._id;
      navigate(`/paiement/${orderId}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Modification d'une commande

  const modifyOrder = async () => {
    const orderIdToModify = Cookies.get("orderToModify");
    // console.log(orderIdToModify);
    console.log(orderToSend);
    const response = await axios.put(
      `http://localhost:3000/orders/update/${total}/total_price`,
      {
        id: orderIdToModify,
        key: "product_list",
        value: orderToSend,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const orderId = response.data._id;
    navigate(`/paiement/${orderId}`);

    console.log(response.data);
  };

  return (
    <section className="flex w-screen flex-col ">
      <div className="mb-4">
        <Button
          text={`Retourner à ma commande`}
          className={" p-1.5 font-bold text-black"}
          disabled={isDisabled}
          func={handleNavigateToHome}
        />
      </div>

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

        <button
          className="my-6 w-11/12 rounded bg-black p-1.5 text-white"
          onClick={() => {
            if (Cookies.get("orderToModify")) {
              modifyOrder();
              console.log("existe");
            } else {
              createOrder();
              console.log("existe pas");
            }
          }}
        >
          Commander pour un total de {total} €
        </button>

        {/* <Button
          text={`Commander pour un total de ${total} €`}
          className={"my-6 w-11/12 rounded bg-black p-1.5 text-white"}
          func={createOrder}
          disabled={isDisabled}
        /> */}

        <Button
          text={"Ajouter des articles"}
          className={
            "w-11/12 rounded bg-greyAddArticlesButton p-1.5 text-black"
          }
          func={handleNavigateToHome}
          disabled={isDisabled}
        />
      </div>
    </section>
  );
};

export default CartClient;
