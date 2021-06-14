import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

import Product from "../../components/Product/Product";
import "./HomeView.css";

export default function HomeView() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.getProducts
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="homeview">
      <h1 className="homeview__title">Latest Products</h1>
      <div className="homeview__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
}
