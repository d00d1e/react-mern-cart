import React from "react";
import "./Backdrop.css";

export default function Backdrop({ show, toggle }) {
  return show && <div className="backdrop" onClick={toggle}></div>;
}
