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

  console.log("cartClient page ==>", cart);

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
        `${baseApiURL}/orders/new`,
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
    try {
      const orderIdToModify = Cookies.get("orderToModify");
      console.log(orderToSend);
      const response = await axios.put(
        `${baseApiURL}/orders/update`,
        {
          id: orderIdToModify,
          key_product_list: "product_list",
          value_product_list: orderToSend,
          key_total_price: "total_price",
          value_total_price: total,
          key_total_items: "total_items",
          value_total_items: orderToSend.length,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log("response.data >>>", response.data);

      const orderId = response.data._id;
      navigate(`/paiement/${orderId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <section className="flex w-screen flex-col ">
    <main className="flex h-screen flex-col items-center">
      <div className="h-100 border-lightgrey fixed top-0 flex w-screen items-center justify-center  gap-2 border-b bg-white ">
        <div className="my-6 flex w-11/12 flex-col items-center justify-center gap-2 bg-white">
          <nav className="self-start">
            <BreadCrumb
              text={"Retourner à ma commande"}
              func={() => navigate("/home")}
            />
          </nav>
          <div className=" m-2 flex justify-center">
            <p className="font-bold">Mon panier</p>
          </div>
        </div>
      </div>

      <div className="mb-24 mt-28 flex w-screen flex-col items-center pb-[140px]">
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
          className={"btn-client mx-[10px]  w-available bg-black text-white"}
          func={Cookies.get("orderToModify") ? modifyOrder : createOrder}
          disabled={isDisabled}
        />
        <Button
          text={"Ajouter des articles"}
          className={
            "btn-client mx-[10px] w-available bg-greyAddArticlesButton text-black"
          }
          func={handleNavigateToHome}
          disabled={isDisabled}
        />
      </div>
    </main>
  );
};

export default CartClient;
