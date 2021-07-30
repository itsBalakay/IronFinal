import React from "react";
import { useState } from "react";
import "../checkout.css";
import "../checkout.scss";
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
          <h4 className="cc-h4">Accepted Payment Methods</h4>
          <div className="credit-cards" style={{ width: `100%` }}>
            <img
              style={{ height: `40` }}
              src="https://shoplineimg.com/assets/footer/card_visa.png"
            />
            <img
              style={{ height: `40` }}
              src="https://shoplineimg.com/assets/footer/card_master.png"
            />
          </div>
        </form>
      ) : (
        <div className="thanks-div">
          <h2>❤️ Thank you for your purchase! ❤️</h2>
          <img
            style={{ width: "60%" }}
            className="thanks-gif"
            src="https://i.gifer.com/K0lK.gif"
            alt="messi"
          />
          <h2>🐐 You're the GOAT 🐐</h2>
        </div>
      )}
    </div>
  );
}

export default Checkout;
