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
  const [galery, setGalery] = useState({});
  const [color, setColor] = useState({});
  const [category, setCategory] = useState({});
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(true);

  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.";

  const getParams = () => {
    const params = new URLSearchParams(window.location.search);
    const newId = params.get("id");
    setId(newId);
  };

  const getGalery = (ID) => {
    axios({
      method: "POST",
      url: `${URL}/galery/getGaleryById`,
      data: {
        id: ID,
      },
    })
      .then((res) => {
        setGalery(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getColor = (ID) => {
    axios({
      method: "POST",
      url: `${URL}/colors/getColorById`,
      data: {
        id: ID,
      },
    })
      .then((res) => {
        setColor(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getCategory = (ID) => {
    axios({
      method: "POST",
      url: `${URL}/category/getCategoryById`,
      data: {
        id: ID,
      },
    })
      .then((res) => {
        setCategory(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const init = () => {
    if (id !== undefined) {
      axios({
        method: "POST",
        url: `${URL}/product/getProductById`,
        data: {
          id: id,
        },
      }).then((res) => {
        // console.log(res.data);
        let data = res.data;
        console.log(data);
        setProduct(data);
        getGalery(data.ID_GALERY);
        getColor(data.ID_COLOR);
        getCategory(data.ID_CATEGORY);
      });
    }
  };

  /*

TODO 

POPRAWIĆ REQUEST Z BAZY DANYCH I ROZDZIELIĆ GO NA OSOBNE GETPRODUCTBYID, GETGALERYBYID, GETCOLORBYID
ZMIENIĆ DANE W KOMPONENCIE ABY BYŁY Z BAZY
DODAĆ FUNKCJONALNOŚĆ KUPOWANIA PRODUKUT

*/

  useEffect(getParams, []);
  useEffect(() => {
    init();
  }, [id]);

  return (
    <>
      <div className="flex product-main">
        <Galery
          photo_1={galery.photo_1}
          photo_2={galery.photo_2}
          photo_3={galery.photo_3}
          photo_4={galery.photo_4}
        />
        <ProductInfo
          category={category.Name}
          color={color.Color_hex}
          description={product.Description}
          price={product.Price}
          name={product.Name}
        />
      </div>
    </>
  );
};

export default Product;
