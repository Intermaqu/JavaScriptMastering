import React, { useState } from "react";
import "../styles/product.css";
import axios from "axios";
import Galery from "./Galery";
import ProductInfo from "./ProductInfo";
import Authentication from "./Authentication";
import AuthenticationService from "../services/AuthenticationService";
import ProductsGrid from "./ProductsGrid";
import { useEffect } from "react";
import { URL } from "../services/URL";

const Product = () => {
  const [id, setId] = useState(undefined);
  const [galery, setGalery] = useState({});
  const [color, setColor] = useState({});
  const [category, setCategory] = useState({});
  const [product, setProduct] = useState({});

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
      headers: {
        authorization: AuthenticationService.getToken(),
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
      headers: {
        authorization: AuthenticationService.getToken(),
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
      headers: {
        authorization: AuthenticationService.getToken(),
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
        headers: {
          authorization: AuthenticationService.getToken(),
        },
      }).then((res) => {
        console.log("product", res.data);
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
          color_hex={color.color_hex}
          description={product.Description}
          price={product.Price}
          name={product.Name}
          id={product.ID_PRODUCT}
          owner={product.ID_USER}
        />
      </div>
    </>
  );
};

export default Product;
