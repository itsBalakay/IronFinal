import React from "react";
import { useState, useEffect } from "react";
import "../index.css";
import actions from "../api";

function Cart() {
  const [cart, setCart] = useState([]);

  const getCartItems = async () => {
    let res = await actions.getCart();
    console.log(res.data);
    setCart(res.data);
  };

  useEffect(async () => {
    getCartItems();
  }, []);

  const ShowCart = () => {
    return cart.map((cartItem) => {
      return (
        <div className="cart-div">
          <div className="cart-image">
            <img
              style={{ width: "25%" }}
              src={cartItem.imageUrl[0]}
              alt="cart-item"
            />
          </div>
          <div className="cart-details">
            <h5>{cartItem.club}</h5>
            <h5>{cartItem.year}</h5>
            <h5>{cartItem.size}</h5>
            <i>SKU: {cartItem._id}</i>
          </div>
          <div className="cart-price">
            <h5 style={{ color: `red` }}>${cartItem.price}</h5>
          </div>
          <div className="button-remove-div">
            <button className="cart-remove">Remove</button>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div>
        <ShowCart />
      </div>
      <div>
        <button>Continue Shoppping</button>
        <button>Checkout</button>
      </div>
    </>
  );
}

export default Cart;
