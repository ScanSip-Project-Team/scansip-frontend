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
import baseApiURL from "../api";

// Import Assets
import timer from "./../assets/timer.svg";

const UserPaiement = ({ total }) => {
  let order_id = useParams();

  order_id = order_id.id;

  const navigate = useNavigate();

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [prices, setPrices] = useState({});
  const [delay, setDelay] = useState(1);

  const appearance = {
    theme: "flat",
    variables: {
      fontFamily: ' "Gill Sans", sans-serif',
      fontLineHeight: "1.5",
      borderRadius: "10px",
      colorBackground: "#F6F8FA",
      accessibleColorOnColorPrimary: "#262626",
    },
    rules: {
      // ".BillingAddressForm": {
      //   display: "none",
      // },
      ".Block": {
        backgroundColor: "var(--colorBackground)",
        boxShadow: "none",
        padding: "12px",
      },
      ".Input": {
        padding: "12px",
        border: "solid 2px black",
      },
      ".Input:disabled, .Input--invalid:disabled": {
        color: "lightgray",
      },
      ".Input:focus, .Input--invalid:focus": {
        boxShadow: "0px 1px 1px grey, 0px 3px 7px grey",
      },
      ".Tab": {
        padding: "10px 12px 8px 12px",
        border: "solid 1px black",
      },
      ".Tab:hover": {
        border: "none",
        boxShadow:
          "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)",
      },
      ".Tab--selected, .Tab--selected:focus, .Tab--selected:hover": {
        border: "none",
        backgroundColor: "#fff",
        boxShadow:
          "0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)",
      },
      ".Label": {
        fontWeight: "500",
      },
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  useEffect(() => {
    const fetchDelay = async () => {
      const { data } = await axios.get(`${baseApiURL}/delay`);
      setDelay(data.minutes_delay);
    };
    fetchDelay();

    fetch(`${baseApiURL}/pay/config`).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });

    fetch(`${baseApiURL}/pay/create-payment-intent/${order_id}`, {
      method: "POST",
      body: JSON.stringify(),
    }).then(async (result) => {
      var response = await result.json();
      const { clientSecret, total_price, order_price, order_fee } = response;
      setClientSecret(clientSecret);
      setPrices({ total_price, order_price, order_fee });
    });
  }, [order_id]);

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
                appearance={appearance}
              />
            </Elements>
          )}
        </div>
      </main>
    </>
  );
};

export default UserPaiement;
