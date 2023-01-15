import axios from "axios";
import React, { useEffect } from "react";
import { URL } from "../services/URL";
import AuthenticationService from "../services/AuthenticationService";
import "../styles/general.css";
import "../styles/product.css";
import { useState } from "react";
import { TextField, MenuItem, Select, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({
  category,
  name,
  price,
  description,
  color_hex,
  id,
  owner,
}) => {
  const navigate = useNavigate();
  const [allDelivery, setAllDelivery] = useState([]);
  const [allPayment, setAllPayment] = useState([]);
  const [currentDelivery, setCurrentDelivery] = useState("");
  const [currentPayment, setCurrentPayment] = useState("");

  const changeStatusToSold = async () => {
    axios({
      method: "POST",
      url: `${URL}/product/changeStatusToSoldById`,
      data: {
        id: id,
      },
      headers: {
        authorization: AuthenticationService.getToken(),
      },
    }).then((res) => {
      console.log("CHANGED!");
    });
  };

  const addNewTransaction = async () => {
    axios({
      method: "POST",
      url: `${URL}/transactions/addTransaction`,
      data: {
        id_seller: owner,
        id_buyer: AuthenticationService.getUserData().ID_USER,
        id_product: id,
        id_delivery: currentDelivery,
        id_payment: currentPayment,
      },
      headers: {
        authorization: AuthenticationService.getToken(),
      },
    }).then((res) => {
      console.log("Added Transaction");
      navigate("/");
    });
  };

  const handleBuy = async () => {
    await changeStatusToSold();
    await addNewTransaction();
  };

  const getAllDelivery = async () => {
    axios({
      method: "GET",
      url: `${URL}/delivery/getAllDelivery`,
      headers: {
        authorization: AuthenticationService.getToken(),
      },
    }).then((res) => {
      console.log("getAllDelivery", res.data);
      setAllDelivery(res.data);
    });
  };

  const getAllPayment = async () => {
    axios({
      method: "GET",
      url: `${URL}/payment/getAllPayment`,
      headers: {
        authorization: AuthenticationService.getToken(),
      },
    }).then((res) => {
      console.log("getAllPayment", res.data);
      setAllPayment(res.data);
    });
  };

  const init = async () => {
    try {
      await getAllDelivery();
      await getAllPayment();
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelivery = (e) => {
    setCurrentDelivery(e.target.value);
  };

  const handlePayment = (e) => {
    setCurrentPayment(e.target.value);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="flex space-between product-info">
      <div>
        <p className="product-name">{name}</p>
        <p className="product-price">{`$  ${price}`}</p>
      </div>
      <p className="product-description">{description}</p>
      <div>
        <div
          className="flex"
          style={{ marginBottom: "10px", justifyContent: "space-between" }}
        >
          <TextField
            required
            select
            label="delivery"
            variant="standard"
            name="delivery"
            onChange={handleDelivery}
            value={currentDelivery}
            style={{ width: "45%" }}
          >
            {allDelivery &&
              allDelivery.map((del) => (
                <MenuItem key={del.ID_DELIVERY} value={del.ID_DELIVERY}>
                  {`[${del.company_name}] ${del.type} - ${del.price}`}
                </MenuItem>
              ))}
          </TextField>
          <TextField
            required
            select
            label="payment"
            variant="standard"
            name="payment"
            onChange={handlePayment}
            value={currentPayment}
            style={{ width: "45%" }}
          >
            {allPayment &&
              allPayment.map((pay) => (
                <MenuItem key={pay.ID_PAYMENT} value={pay.ID_PAYMENT}>
                  {`${pay.type} (${pay.description})`}
                </MenuItem>
              ))}
          </TextField>
        </div>

        <button className="product-buy-button" onClick={() => handleBuy()}>
          BUY IT
        </button>
      </div>
      <span>
        <p style={{ marginBottom: "10px" }}>
          <span className="bold">Categories: </span>
          {category}
        </p>
        <span
          className="bold"
          style={{
            color: `#${color_hex}`,
          }}
        >
          COLOR
        </span>
      </span>
    </div>
  );
};

export default ProductInfo;
