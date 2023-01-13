import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/product-miniature.css";

const ProductMiniature = ({ photo, id, name, price }) => {
  const navigate = useNavigate();
  console.log(`${name} ${photo}`);
  return (
    <div
      className="product-miniature"
      onClick={() => navigate(`/product?id=${id}`)}
    >
      <img
        className="product-miniature-image"
        src={`/assets/productImages/${photo}`}
      />
      <p className="product-miniature-name">{name}</p>
      <p className="product-miniature-price">$ {price}</p>
    </div>
  );
};

export default ProductMiniature;
