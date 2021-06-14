import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import "./SideDrawer.css";

export default function SideDrawer({ show, toggle }) {
  const { cartItems } = useSelector((state) => state.cart);

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <div className={show ? "sidedrawer show" : "sidedrawer"}>
      <ul className="sidedrawer__links" onClick={toggle}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="sidedrawer__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
}
