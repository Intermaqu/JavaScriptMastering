import React, { useEffect } from "react";
import "../styles/product-grid.css";
import ProductMiniature from "./ProductMiniature";
import photo from "../images/display.png";
import { useLocation, useSearchParams } from "react-router-dom";

const ProductsGrid = ({ snackbar }) => {
  const arr = new Array(9).fill(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const getParams = () => {
    const params = new URLSearchParams(window.location.search);
    const fromLogin = params.get("fromLogin");
    if (fromLogin === "true") {
      snackbar("Logged in successfully", "success");
    }
    searchParams.delete("fromLogin");
    setSearchParams(searchParams);
  };

  useEffect(getParams, []);

  return (
    <main className="product-grid">
      <p className="product-grid--p">Shop The Latest</p>
      {arr.map((_, index) => {
        return (
          <ProductMiniature
            key={index}
            id={index}
            photo={photo}
            price="20.00"
            name="Lira Earrings"
          />
        );
      })}
    </main>
  );
};

export default ProductsGrid;
