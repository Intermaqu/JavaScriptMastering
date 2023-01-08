import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/product.css";
import Footer from "./Footer";
import Galery from "./Galery";
import ProductInfo from "./ProductInfo";
import Authentication from "./Authentication";
import ProductsGrid from "./ProductsGrid";
import { useEffect } from "react";

const Product = () => {
  const [id, setId] = useState("");
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.";

  const getParams = () => {
    const params = new URLSearchParams(window.location.search);
    const newId = params.get("id");
    console.log(newId);
    setId(newId);
  };

  useEffect(getParams, []);

  return (
    <div className="flex product-main">
      <Galery />
      <ProductInfo
        category={["Fasion", "Style"]}
        description={description}
        price="20.00"
        name="Lira Earrings"
      />
    </div>
  );
};

export default Product;
