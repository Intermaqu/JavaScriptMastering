import React from "react";
import "../styles/general.css";
import "../styles/product.css";

const ProductInfo = ({ category, name, price, description }) => {
  return (
    <div className="flex space-between product-info">
      <div>
        <p className="product-name">Lira Earrings {/*name*/}</p>
        <p className="product-price">{`$ ${(20.0).toFixed(2) /*price*/}`}</p>
      </div>
      <div>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis.{/*description*/}
        </p>
        <button className="product-buy-button" onClick={() => console.log("X")}>
          BUY IT
        </button>
      </div>
      <p>
        <span className="bold">Categories: </span> Fasion, Style
        {/*props.category*/}
      </p>
    </div>
  );
};

export default ProductInfo;
