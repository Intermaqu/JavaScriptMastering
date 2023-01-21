import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { URL } from "../services/URL";
import AuthenticationService from "../services/AuthenticationService";
import ProductDashboard from "./ProductDashboard";
import "../styles/userDashboard.css";
import { useNavigate } from 'react-router-dom';

const UserDashboard = ({ snackbar }) => {
  const navigate = useNavigate()
  const [earned, setEarned] = useState(0);
  const [allSoldProducts, setAllSoldProducts] = useState([]);
  const [allPostedProducts, setAllPostedProducts] = useState([]);

  const getAllProducts = () => {
    axios({
      method: "POST",
      url: `${URL}/product/getAllProductsByIdSellerWithGalery`,
      data: {
        id: AuthenticationService.getUserData().ID_USER,
      },
      headers: {
        authorization: AuthenticationService.getToken(),
      },
    }).then((res) => {
      console.log(res.data.filter((product) => product.Status === "Sold"));
      console.log(res.data.filter((product) => product.Status === "Posted"));
      setAllSoldProducts(
        res.data.filter((product) => product.Status === "Sold")
      );
      setAllPostedProducts(
        res.data.filter((product) => product.Status === "Posted")
      );
    });
  }

  const getTotalEarned = () => {
    axios({
      method: "POST",
      url: `${URL}/product/getTotalEarned`,
      data: {
        id: AuthenticationService.getUserData().ID_USER,
      },
      headers: {
        authorization: AuthenticationService.getToken(),
      },
    }).then((res) => {
      
      setEarned(res.data.totalearned)
    }).catch(e=>{
      console.log(e)
    });
  }

  const handleDelete = (product_id) => {
    axios({
      method: "POST",
      url: `${URL}/product/deleteProductById`,
      data: {
        id: product_id,
      },
      headers: {
        authorization: AuthenticationService.getToken(),
      },
    }).then((res) => {
      setAllPostedProducts(allPostedProducts.filter(product=>product.ID_PRODUCT !== product_id))
      snackbar("Product deleted successfully", "success")
    }).catch(e=>{
      snackbar("Error deleting product", "error")
    })
  }

  const init = () => {
    getAllProducts()
    getTotalEarned()
  };

  useEffect(init, []);

  return (
    <div className="userDashboard">
      <div className="userDashboard-posted">
        <span className="userDashboard-title">Posted</span>
        {allPostedProducts.length > 0 &&
          allPostedProducts.map((product) => (
            <ProductDashboard
              name={product.Name}
              price={product.Price}
              description={product.Description}
              photo_1={product.photo_1}
              key={product.ID_PRODUCT}
              id={product.ID_PRODUCT}
              snackbar={snackbar}
              status={product.Status}
              handleDelete={()=>handleDelete(product.ID_PRODUCT)}
            />
          ))}
      </div>
      <div className="userDashboard-sold">
        <span className="userDashboard-title">Sold</span>
        {allSoldProducts.length > 0 &&
          allSoldProducts.map((product) => (
            <ProductDashboard
              name={product.Name}
              price={product.Price}
              description={product.Description}
              photo_1={product.photo_1}
              key={product.ID_PRODUCT}
              id={product.ID_PRODUCT}
              status={product.Status}
            />
          ))}
      </div>
      <div className="userDashboard-earned">
        <p className="userDashboard-title">Earned: <span style={{color:"red"}}>${earned}</span></p>
      </div>
      <button onClick={()=>{navigate("/login")}} className="logout-button">Log out</button>
    </div>
  );
};

export default UserDashboard;
