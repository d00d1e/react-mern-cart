import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import "./CartView.css";

export default function CartView() {
  return (
    <div className="cartview">
      <div className="cartview__left">
        <h2>Shopping Cart</h2>
        <CartItem />
      </div>
      <div className="cartview__right">
        <div className="cartview__info">
          <p>Subtotal: (0) items</p>
          <p>$499.99</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}
