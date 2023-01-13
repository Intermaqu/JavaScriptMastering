import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/product.css";
import Footer from "./Footer";
import axios from "axios";
import Galery from "./Galery";
import ProductInfo from "./ProductInfo";
import Authentication from "./Authentication";
import ProductsGrid from "./ProductsGrid";
import { useEffect } from "react";
import { URL } from "../services/URL";

const Product = () => {
  const [id, setId] = useState(undefined);
  const [product, setProduct] = useState({});
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.";

  const getParams = () => {
    const params = new URLSearchParams(window.location.search);
    const newId = params.get("id");
    // console.log(newId);
    setId(newId);
  };

  const getData = () => {
    axios({
      method: "POST",
      url: `${URL}/product/getProductsByIDWithGalery`,
      data: {
        id: id,
      },
    })
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  /*

TODO 

POPRAWIĆ REQUEST Z BAZY DANYCH I ROZDZIELIĆ GO NA OSOBNE GETPRODUCTBYID, GETGALERYBYID, GETCOLORBYID
ZMIENIĆ DANE W KOMPONENCIE ABY BYŁY Z BAZY
DODAĆ FUNKCJONALNOŚĆ KUPOWANIA PRODUKUT

*/

  useEffect(getParams, []);
  useEffect(() => {
    if (id !== undefined) getData();
  }, [id]);

  return (
    <div className="flex product-main">
      <Galery
        photo_1={product.photo_1}
        photo_2={product.photo_2}
        photo_3={product.photo_3}
        photo_4={product.photo_4}
      />
      <ProductInfo
        category={product.cate}
        description={description}
        price="20.00"
        name="Lira Earrings"
      />
    </div>
  );
};

export default Product;
