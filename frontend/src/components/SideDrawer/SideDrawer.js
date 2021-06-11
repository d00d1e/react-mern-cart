import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

export default function SideDrawer({ show, toggle }) {
  return (
    <div className={show ? "sidedrawer show" : "sidedrawer"}>
      <ul className="sidedrawer__links" onClick={toggle}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="sidedrawer__badge">0</span>
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
