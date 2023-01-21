import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import { TextField } from "@mui/material";
import { URL } from "../services/URL";
import axios from "axios";
import AuthenticationService from "../services/AuthenticationService";
import "../styles/modifyProduct.css"


const styled = {
  width: "300px",
};

const Dashboard = ({ snackbar }) => {
  const [displayed, setDisplayed] = useState("Name");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const handleSwitch = (e) => {
    setDisplayed(e.target.name);
  };

  const handleRequest = () => {
    if (displayed === "Name" && name !== "") {
      axios({
        method: "POST",
        url: `${URL}/product/updateProductNameById`,
        data: {
          id: id,
          name: name,
        },
        headers: {
          authorization: AuthenticationService.getToken(),
        },
      })
        .then((res) => {
          snackbar("Name Has Been Updated!", "success");
          navigate("/userDashboard");
        })
        .catch((e) => {
          snackbar("Something Went Wrong!", "error");
        });
    }
    if (displayed === "Price" && price !== "") {
      axios({
        method: "POST",
        url: `${URL}/product/updateProductPriceById`,
        data: {
          id: id,
          price: price,
        },
        headers: {
          authorization: AuthenticationService.getToken(),
        },
      })
        .then((res) => {
          snackbar("Price Has Been Updated!", "success");
          navigate("/userDashboard");
        })
        .catch((e) => {
          snackbar("Something Went Wrong!", "error");
        });
    }
    if (displayed === "Description" && description !== "") {
      axios({
        method: "POST",
        url: `${URL}/product/updateProductDescriptionById`,
        data: {
          id: id,
          description: description,
        },
        headers: {
          authorization: AuthenticationService.getToken(),
        },
      })
        .then((res) => {
          snackbar("Description Has Been Updated!", "success");
          navigate("/userDashboard");
        })
        .catch((e) => {
          snackbar("Something Went Wrong!", "error");
        });
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    setId(id);
  }, []);

  return (
    <div className="modifyProduct">
      <div className="modifyProduct-switch">
        <button
          name="Name"
          className={
            "modifyProduct-switch-button " +
            (displayed === "Name" ? "current-button-displayed" : "")
          }
          onClick={handleSwitch}
        >
          Name
        </button>
        <button
          name="Price"
          className={
            "modifyProduct-switch-button " +
            (displayed === "Price" ? "current-button-displayed" : "")
          }
          onClick={handleSwitch}
        >
          Price
        </button>
        <button
          name="Description"
          className={
            "modifyProduct-switch-button " +
            (displayed === "Description" ? "current-button-displayed" : "")
          }
          onClick={handleSwitch}
        >
          Description
        </button>
      </div>
      {displayed === "Name" && (
        <div className="modifyProduct-form">
          <TextField
            required
            name="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            label="Name"
            variant="standard"
            style={styled}
          />
        </div>
      )}
      {displayed === "Price" && (
        <div className="modifyProduct-form">
          <TextField
            required
            name="Price"
            onChange={(e) => {
              parseInt(e.target.value) >= 0 && setPrice(e.target.value);
            }}
            value={price}
            label="Price"
            variant="standard"
            style={styled}
            type="number"
          />
        </div>
      )}
      {displayed === "Description" && (
        <div className="modifyProduct-form">
          <TextField
            required
            name="Description"
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows="4"
            value={description}
            label="Description"
            variant="standard"
            style={styled}
          />
        </div>
      )}
      <button
        onClick={() => handleRequest()}
        className="modifyProduct-send-button"
      >
        Send Data!
      </button>
    </div>
  );
};

export default Dashboard;
