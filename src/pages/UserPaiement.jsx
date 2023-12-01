// Import Package
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import Components
import BreadCrumb from "../components/Breadcrumb";
import PaiementForm from "../components/PaiementForm";

// Import Assets
import timer from "./../assets/timer.svg";

const UserPaiement = ({ total }) => {
  let order_id = useParams();

  order_id = order_id.id;

  console.log(order_id);

  const navigate = useNavigate();

  // order_id = "656614e373933aa6ab1b3a69";
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [prices, setPrices] = useState({});
  const [delay, setDelay] = useState(1);

  const options = {
    clientSecret,
  };

  useEffect(() => {
    const fetchDelay = async () => {
      const { data } = await axios.get("http://localhost:3000/delay");
      setDelay(data.minutes_delay);
    };
    fetchDelay();

    fetch("http://localhost:3000/pay/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });

    fetch(`http://localhost:3000/pay/create-payment-intent/${order_id}`, {
      method: "POST",
      body: JSON.stringify(),
    }).then(async (result) => {
      var response = await result.json();
      const { clientSecret, total_price, order_price, order_fee } = response;
      setClientSecret(clientSecret);
      setPrices({ total_price, order_price, order_fee });
    });
  }, []);

  return (
    <>
      <main className="padding-container flex h-screen flex-col items-center">
        <nav className="self-start">
          <BreadCrumb
            text={"Retourner au panier"}
            func={() => navigate("/cart")}
          />
        </nav>

        <div className="flex items-center justify-center gap-2.5 py-10">
          <img
            src={timer}
            alt="icone d'une horloge noir et blanche"
            className=""
          />
          <p className="text-xs font-medium">
            Temps d'attente estimé : {delay} minutes
          </p>
        </div>
        <h1 className="w-full border-y border-grey-232 py-5px text-center text-sm font-medium">
          Paiement
        </h1>
        <p className="w-full py-2 text-xs font-medium">
          Choisissez votre moyen de paiement
        </p>
        <div className="h-available w-full ">
          {clientSecret && stripePromise && (
            <Elements stripe={stripePromise} options={options}>
              <PaiementForm
                clientSecret={clientSecret}
                prices={prices}
                total={total}
                order_id={order_id}
              />
            </Elements>
          )}
        </div>
      </main>
    </>
  );
};

export default UserPaiement;
