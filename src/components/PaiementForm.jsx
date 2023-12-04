// Import Package
import { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import CentsToEuro from "../function/CentsToEuro";

const PaiementForm = ({ prices, total, clientSecret, order_id }) => {
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements({
    clientSecret,
  });

  useEffect(() => {
    if (total !== Number.parseInt(CentsToEuro(prices.order_price))) {
      setMessage("An unexpected error occured.");
    }
  }, [prices.order_price, total]);

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return navigate("/home");
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/billing/${order_id}`,
      },
    });

    if (error.type !== "card_error" || error.type !== "validation_error") {
      setTimeout(() => setIsProcessing(false), 500);
    } else {
      setMessage("An unexpected error occured.");
    }
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className={`align-center flex h-full w-full flex-col justify-between`}
    >
      <div className="h-available flex flex-col justify-center">
        <PaymentElement id="payment-element" />
      </div>
      <section>
        <div className=" border-y border-grey-232">
          <ul>
            <li className="w-available flex justify-between">
              <p>Sous-total</p>
              <p>{CentsToEuro(prices.order_price)}€</p>
            </li>
            <li className="w-available flex justify-between">
              <p>Frais de service</p>
              <p>{CentsToEuro(prices.order_fee)}€</p>
            </li>
            <li className="w-available flex justify-between font-semibold">
              <p>Total</p>
              <p>{CentsToEuro(prices.total_price)}€</p>
            </li>
          </ul>
        </div>

        {message && (
          <div
            id="payment-message"
            className="text-400 h-4 text-xs text-red-600 "
          >
            Erreur : {message}
          </div>
        )}
        <button
          disabled={isProcessing || !stripe || !elements}
          id="submit"
          className="btn-black w-available bot-0 sticky  mx-2.5 my-5 border-y border-grey-232 px-3 py-2"
        >
          <span id="button-text">
            {isProcessing ? "Processing ... " : "Pay now"}
          </span>
        </button>
      </section>
    </form>
  );
};

export default PaiementForm;
