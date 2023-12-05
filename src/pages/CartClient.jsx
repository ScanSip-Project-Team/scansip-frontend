// Import Package
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import baseApiURL from "../api";

//Import Components
import Button from "../components/Button";
import BreadCrumb from "../components/Breadcrumb";
import ListProduct from "../components/ListProduct";

const CartClient = ({ setCart, cart, setTotal, total }) => {
  const [isDisabled, setIsDisable] = useState(false);

  // console.log(total);
  const navigate = useNavigate();

  useEffect(() => {
    if (total === 0) {
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    console.log(orderToSend);
    const response = await axios.put(
      `${baseApiURL}/order/update/${total}/total_price`,
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
      <div className=" h m-7 flex justify-center">
        <p className="font-bold">Mon panier</p>
      </div>

      <div className="flex w-screen flex-col items-center">
        <ListProduct
          data={cart}
          cart={cart}
          setCart={setCart}
          setTotal={setTotal}
          total={total}
        />
      </div>
      <div className="border-lightgrey  fixed bottom-0 mx-[10px] flex w-screen flex-col  items-center  gap-2.5 border-t bg-white py-6">
        <Button
          text={`Commande pour un total de ${total} €`}
          className={"btn-client w-available  mx-[10px] bg-black text-white"}
          func={Cookies.get("orderToModify") ? modifyOrder : createOrder}
          disabled={isDisabled}
        />
        <Button
          text={"Ajouter des articles"}
          className={
            "btn-client w-available bg-greyAddArticlesButton mx-[10px] text-black"
          }
          func={handleNavigateToHome}
          disabled={isDisabled}
        />
      </div>
    </main>
  );
};

export default CartClient;
