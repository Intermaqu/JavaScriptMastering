import React, { useEffect, useState } from "react";
import "../styles/product-grid.css";
import ProductMiniature from "./ProductMiniature";
import { useLocation, useSearchParams } from "react-router-dom";
import { TextField } from "@mui/material";
import axios from "axios";
import { URL } from "../services/URL";
import AuthenticationService from "../services/AuthenticationService";

const ProductsGrid = ({ snackbar }) => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

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

  if (!AuthenticationService.isUserLoggedIn()) {
    window.location.href = "/login";
    return <></>;
  }

  return (
    <main className="product-grid">
      <div className="product-grid--p" style={{display:"flex"}}>
        <p style={{marginRight: "auto"}}>Shop The Latest</p>
        <TextField
          name="search"
          onChange={(e)=>{setSearch(e.target.value)}}
          value={search}
          label="Search"
          variant="standard"
          style={{width: "250px"}}
        />
      </div>
      {data &&
        data.map((obj) => {
          return (
            obj.ID_USER !== AuthenticationService.getUserData().ID_USER && (search === "" || obj.Name.toLowerCase().includes(search.toLowerCase()) ) && (
              <ProductMiniature
                key={obj.ID_PRODUCT}
                id={obj.ID_PRODUCT}
                photo={obj.photo_1}
                price={obj.Price}
                name={obj.Name}
                snackbar={snackbar}
              />
            )
          );
        })}
    </main>
  );
};

export default ProductsGrid;
