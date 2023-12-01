// Import Package
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Import Components
import Button from "../components/Button";

const CartClient = ({ setCart, cart, setTotal, total }) => {
  //   console.log(cart, total);

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
    // console.log(e._id, e.quantity);
    orderToSend.push({ product: { id: e._id }, quantity_cart: e.quantity });
  });

  console.log(orderToSend);

  const createOrder = async () => {
    console.log(orderToSend);
    const response = await axios.post("http://localhost:3000/order/new", {
      product_list: orderToSend,
    });
    console.log(response.data);
  };

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
    <section className="flex w-screen flex-col ">
      <div className="mb-4">
        <p className="font-bold" onClick={handleNavigateToHome}>
          Retourner à ma commande
        </p>
      </div>

      <div className="mb-7 flex justify-center">
        <p className="font-bold">Mon panier</p>
      </div>

      <div className="flex flex-col items-center">
        {cart.map((elem) => {
          //   console.log(elem);
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
        />

        <Button
          text={"Ajouter des articles"}
          className={
            "w-11/12 rounded bg-greyAddArticlesButton p-1.5 text-black"
          }
          func={handleNavigateToHome}
        />
      </div>
    </section>
  );
};

export default CartClient;
