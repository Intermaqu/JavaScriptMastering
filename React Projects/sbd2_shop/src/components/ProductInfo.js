import React from "react";
import "../styles/general.css";
import "../styles/product.css";

const ProductInfo = ({ category, name, price, description }) => {
  return (
    <div className="flex space-between product-info">
      <div>
        <p className="product-name">{name}</p>
        <p className="product-price">{`$  ${price}`}</p>
      </div>
      <div>
        <p className="product-description">{description}</p>
        <button
          className="product-buy-button"
          onClick={() => console.log("BUY IT")}
        >
          BUY IT
        </button>
      </div>
      <p>
        <span className="bold">Categories: </span>
        {category}
      </p>
    </div>
  );
};

export default ProductInfo;
