import React from "react";
import { useState, useEffect } from "react";
import "../cart.css";
import actions from "../api";
import { Link } from "react-router-dom";

function Cart(props) {
  const [cart, setCart] = useState([]);

  const getCartItems = async () => {
    let res = await actions.getCart();
    console.log(res.data);
    setCart(res.data);
  };

  useEffect(async () => {
    getCartItems();
  }, []);

  const removeItem = async (i, item) => {
    console.log(i);
    let copyOfCart = [...cart];
    let res = await actions.deleteItem(item);
    console.log("button working?");
    copyOfCart.splice(i, 1);
    setCart(copyOfCart);
  };

  const totalCart = () => {
    return cart.reduce((acc, { price }) => {
      acc = acc + price;
      return acc;
    }, 0);
  };
  console.log(totalCart());
  props.setTotal(totalCart() * 100);

  const ShowCart = () => {
    return cart.map((cartItem, i) => {
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
            <button
              className="cart-remove"
              onClick={() => removeItem(i, cartItem)}
            >
              Remove
            </button>
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
        <h2>Subtotal: ${totalCart().toFixed(2)}</h2>
      </div>
      <div className="cart-bottom-button">
        <Link to="/">
          <button>Continue Shoppping</button>
        </Link>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
    </>
  );
}

export default Cart;
