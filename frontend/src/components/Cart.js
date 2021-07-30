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
        <div class="container">
          <div class="cart-table">
            <div class="row cart-row">
              <div class="col-xs-12 col-md-2">
                <img
                  src={cartItem.imageUrl[0]}
                  alt="cart-item"
                  style={{ width: "100%" }}
                />
              </div>
              <div class="col-md-6">
                <div class="product-articlenr">{cartItem._id}</div>
                <div class="product-name">{cartItem.club} Shirt</div>
                <div class="product-options">
                  <span>Year:</span> {cartItem.year}
                  <br />
                  <span>Size:</span> {cartItem.size}
                </div>
                <div class="product-price">
                  {/* <input
                    readOnly="true"
                    type="text"
                    name="quantity[1]"
                    value="1"
                    size="1"
                    class="form-control"
                  /> */}
                  {/* <button
                    type="submit"
                    data-toggle="tooltip"
                    title="Uppdatera"
                    class="update"
                  > */}
                  {/* <i class="fas fa-sync"></i>
                  </button> */}
                  <div class="product-price">$ {cartItem.price}</div>
                </div>
              </div>
              <div class="col-md-3 cart-actions">
                <div class="product-price-total">$ {cartItem.price}</div>
                <div class="product-delete">
                  <button
                    type="button"
                    data-toggle="tooltip"
                    title="Ta bort"
                    class="delete"
                    onClick={() => removeItem(i, cartItem)}
                  >
                    <strong>X</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div>
        <h1 style={{ fontWeight: "300" }}>Cart</h1>
      </div>
      <div className="showCartDiv">
        <ShowCart />
      </div>
      <div>
        <h2>Total: ${totalCart().toFixed(2)}</h2>
      </div>
      <div className="cart-bottom-button">
        <div className="contShopping">
          <Link to="/">
            <button style={{ width: "110%", height: "110%" }}>
              Continue Shoppping
            </button>
          </Link>
        </div>
        <div className="checkoutButton">
          <Link to="/checkout">
            <button style={{ width: "110%", height: "110%" }}>Checkout</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
