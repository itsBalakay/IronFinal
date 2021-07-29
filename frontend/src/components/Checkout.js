import React from "react";
import { useState } from "react";
import "../checkout.css";
import actions from "../api";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

let CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "white",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

function Checkout(props) {
  const [success, setSuccess] = useState(false);
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log(error, paymentMethod);
    if (!error) {
      try {
        const { id } = paymentMethod;
        let res = await actions.stripePay({ id, amount: props.total });
        console.log(res);
        if (res.data.success) {
          console.log("successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  //     if (!stripe || !elements) {
  //       return;
  //     }
  //     // Do something with the element
  //     const cardElement = elements.getElement(CardElement);
  //     console.log("card", cardElement);
  //     console.log("stripe", stripe);
  //   };

  return (
    <div>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <div className="PayRow">
            <button className="checkout-button">Pay</button>
          </div>
        </form>
      ) : (
        <div>Thank you for your purchase!</div>
      )}
    </div>
  );
}

export default Checkout;
