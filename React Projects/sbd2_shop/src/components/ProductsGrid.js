import React, { useEffect, useState } from "react";
import "../styles/product-grid.css";
import ProductMiniature from "./ProductMiniature";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../services/URL";
import AuthenticationService from "../services/AuthenticationService";

const ProductsGrid = ({ snackbar }) => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  /*
    ZMIENIĆ REQUEST ABY ZWRACAŁ TYLKO TE PRODUKTY KTÓRE MAJĄ STATUS POSTED

  
  */

  const getDataFromDB = () => {
    axios({
      method: "GET",
      url: `${URL}/product/getAllPostedProductsWithGalery`,
      headers: {
        authorization: AuthenticationService.getToken(),
      },
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(getDataFromDB, []);

  const getParams = () => {
    const params = new URLSearchParams(window.location.search);
    const fromLogin = params.get("fromLogin");
    if (fromLogin === "true") {
      snackbar("Logged in successfully", "success");
    }
    searchParams.delete("fromLogin");
    setSearchParams(searchParams);
  };

  useEffect(getParams, []);

  return (
    <main className="product-grid">
      <p className="product-grid--p">Shop The Latest</p>
      {data &&
        data.map((obj) => {
          return (
            obj.ID_USER !== AuthenticationService.getUserData().ID_USER && (
              <ProductMiniature
                key={obj.ID_PRODUCT}
                id={obj.ID_PRODUCT}
                photo={obj.photo_1}
                price={obj.Price}
                name={obj.Name}
              />
            )
          );
        })}
    </main>
  );
};

export default ProductsGrid;
