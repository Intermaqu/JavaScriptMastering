import React from "react";
import Navbar from "./Navbar";
import "../styles/product.css";
import Footer from "./Footer";
import Galery from "./Galery";
import ProductInfo from "./ProductInfo";
import Authentication from "./Authentication";

const Product = () => {
  return (
    <div className="product">
      <Navbar />
      {/* <div className="flex product-main">
        <Galery />
        <ProductInfo />
      </div> */}
      <Authentication />
      <Footer />
    </div>
  );
};

export default Product;
