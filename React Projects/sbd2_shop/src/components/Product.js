import React from "react";
import Navbar from "./Navbar";
import "../styles/product.css";
import Footer from "./Footer";
import Galery from "./Galery";

const Product = () => {
  return (
    <div className="product">
      <Navbar />
      <Galery/>
      <Footer />
    </div>
  );
};

export default Product;
