import { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import CentsToEuro from "../function/CentsToEuro";

const PaiementForm = ({ prices, total, clientSecret, order_id }) => {
  const stripe = useStripe();
  const elements = useElements({ clientSecret });
  //   const appearance = {
  //     theme: "flat",
  //     variables: {
  //       colorPrimary: "#525252",
  //     },
  //   };
  //   const paymentElement = elements.create("payment", {
  //     fields: {
  //       billingDetails: {
  //         address: {
  //           country: "never",
  //         },
  //       },
  //     },
  //   });

  useEffect(() => {
    if (total !== prices.order_price) {
      setMessage("An unexpected error occured.");
    }
  }, []);

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/billing/${order_id}`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
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

      {/* {message && <div id="payment-message">{message}</div>} */}
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
            {message}
          </div>
        )}
        <button
          disabled={isProcessing || !stripe || !elements}
          id="submit"
          className="btn-black w-available mx-2.5 my-5  border-y border-grey-232 px-3 py-2"
        >
          <span id="button-text">
            {isProcessing ? "Processing ... " : "Pay now"}
          </span>
        </button>
      </section>

      {/* Show any error or success messages */}
    </form>
  );
};

export default PaiementForm;
