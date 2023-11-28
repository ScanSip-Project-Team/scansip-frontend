// Import Package
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Import Components
import BreadCrumb from "../../Components/Breadcrumb";
import PaiementType from "../../Components/PaiementType";
import PaiementForm from "../../Components/PaiementForm";
// import CheckoutForm from "./components/CheckoutForm";

// Import Assets
import timer from "./../assets/timer.svg";
import applepay from "./../assets/applepay.svg";
import googlepay from "./../assets/googlepay.svg";
import paypal from "./../assets/paypal.svg";

const UserPaiement = () => {
  const [selected, setSelected] = useState("cb");
  const stripePromise = loadStripe(
    "pk_test_51N5sWrEP7RE31YxqwqUoKGcFKSmfZaaPhYmtqF76G9zR8CN2atBlKelEpFGdfdoM34wGEKDLVE0goGEzHurfVcIk00JWycFKI2",
  );
  //   Variable de developpement
  const numberOfSecond = 160;
  let estimateTime = Math.ceil(numberOfSecond / 60);
  const totalPrice = 17;

  return (
    <>
      <main className="container flex flex-col items-center">
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
        <ul className="flex flex-row gap-3">
          <li>
            <PaiementType
              name={"cb"}
              selected={selected}
              setSelected={setSelected}
              img={applepay}
            />
          </li>
          <li>
            <PaiementType
              name={"applePay"}
              selected={selected}
              setSelected={setSelected}
              img={applepay}
            />
          </li>
          <li>
            <PaiementType
              name={"googlepay"}
              selected={selected}
              setSelected={setSelected}
              img={googlepay}
            />
          </li>
          <li>
            <PaiementType
              name={"paypal"}
              selected={selected}
              setSelected={setSelected}
              img={paypal}
            />
          </li>
        </ul>
        <Elements stripe={stripePromise}>
          <PaiementForm />
        </Elements>
      </main>
    </>
  );
};

export default UserPaiement;
