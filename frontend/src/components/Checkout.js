import React from "react";
import { useState } from "react";
import "../checkout.css";
import actions from "../api";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

var CARD_OPTIONS = {
  base: {
    color: "#303238",
    fontSize: "16px",
    fontFamily: '"Open Sans", sans-serif',
    fontSmoothing: "antialiased",
    "::placeholder": {
      color: "#CFD7DF",
    },
  },
  invalid: {
    color: "#e5424d",
    ":focus": {
      color: "#303238",
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

    if (!error) {
      try {
        const { id } = paymentMethod;
        let res = await actions.stripePay;
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
          <button>Pay</button>
        </form>
      ) : (
        <div>Thank you for your purchase!</div>
      )}
    </div>
  );
}

export default Checkout;
