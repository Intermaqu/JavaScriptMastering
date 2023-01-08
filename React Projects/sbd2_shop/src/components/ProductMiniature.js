import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/product-miniature.css";

const ProductMiniature = ({ photo, id, name, price }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-miniature"
      onClick={() => navigate(`/product?id=${id}`)}
    >
      <img className="product-miniature-image" src={photo} />
      <p className="product-miniature-name">{name}</p>
      <p className="product-miniature-price">$ {price}</p>
    </div>
  );
};

export default ProductMiniature;
