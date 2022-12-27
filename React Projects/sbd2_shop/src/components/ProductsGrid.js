import React from "react";
import "../styles/product-grid.css";
import ProductMiniature from "./ProductMiniature";
import photo from "../images/display.png";

const ProductsGrid = () => {

  const arr = new Array(9).fill(0)
    return (
    <main className="product-grid">
      <p className="product-grid--p">Shop The Latest</p>
      {arr.map((_, index) => {
        return (
          <ProductMiniature key={index} photo={photo} price="20.00" name="Lira Earrings" />
        );
      })}
    </main>
  );
};

export default ProductsGrid;
