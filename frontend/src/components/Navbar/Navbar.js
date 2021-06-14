import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import "./Navbar.css";

export default function Navbar({ toggle }) {
  const { cartItems } = useSelector((state) => state.cart);

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>MERN Shopping</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo_cart-badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={toggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
