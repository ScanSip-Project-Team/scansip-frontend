import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import Button from "./Button";
const PaiementForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
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
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="align-center flex w-full flex-col justify-between"
    >
      <PaymentElement id="payment-element" />
      <Button
        disabled={isProcessing || !stripe || !elements}
        func={() => console.log("test")}
        // elementId={element._id}
        className={
          "btn-black w-available mx-2.5 my-5  border-y border-grey-232 px-3"
        }
        text={isProcessing ? "Processing ... " : "Payer pour un total de XX"}
      />
      {/* <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button> */}
      {/* Show any error or success messages */}
    </form>
  );
};

export default PaiementForm;
