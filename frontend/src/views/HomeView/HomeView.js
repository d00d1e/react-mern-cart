import React from "react";

import Product from "../../components/Product/Product";
import "./HomeView.css";

export default function HomeView() {
  return (
    <div className="homeview">
      <h1 className="homeview__title">Latest Products</h1>
      <div className="homeview__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
