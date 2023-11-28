// Import Package
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Import Components
import BreadCrumb from "../../Components/Breadcrumb";
import PaiementForm from "../../Components/PaiementForm";

// Import Assets
import timer from "./../assets/timer.svg";

const UserPaiement = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const options = {
    clientSecret,
  };

  //   Variable de developpement
  const numberOfSecond = 160;
  let estimateTime = Math.ceil(numberOfSecond / 60);

  useEffect(() => {
    fetch("http://localhost:3000/pay/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/pay/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
      <main className="margin-container flex flex-col items-center">
        <nav className="self-start">
          <BreadCrumb
            text={"Retourner au panier"}
            func={() => console.log("retour")}
          />
        </nav>

        <div className="flex items-center justify-center gap-2.5 py-10">
          <img
            src={timer}
            alt="icone d'une horloge noir et blanche"
            className=""
          />
          <p className="text-xs font-medium">
            Temps d'attente estimé : {estimateTime.toString()} minutes
          </p>
        </div>
        <h1 className="w-full border-y border-grey-232 py-5px text-center text-sm font-medium">
          Paiement
        </h1>
        <p className="w-full py-2 text-xs font-medium">
          Choisissez votre moyen de paiement
        </p>
        <div className="h-1/2 w-full">
          {clientSecret && stripePromise && (
            <Elements stripe={stripePromise} options={options}>
              <PaiementForm clientSecret={clientSecret} />
            </Elements>
          )}
        </div>
      </main>
    </>
  );
};

export default UserPaiement;
