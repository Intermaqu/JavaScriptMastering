import React from "react";
import "../styles/navbar.css";

const Cart = (props) => {
  return (
    <div className="cart-component">
      <h4>Cart</h4>
      <span className="cart-component--product">
        <span className="cart-component--product--content">
          <img
            src="/images/image-product-1-thumbnail.jpg"
            className="cart--product--image"
          />
          <span className="cart-component--product--content--info">
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x 3 $375.00</p>
          </span>
          <img src="images/icon-delete.svg" className="cart--product--delete"/>
        </span>
        <button className="orange-button cart-submit">Checkout</button>
      </span>
    </div>
  );
};

export default Cart;
