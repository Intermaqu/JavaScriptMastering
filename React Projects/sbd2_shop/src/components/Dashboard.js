import React, { useState } from "react";
import "../styles/dashboard.css";
import { TextField } from "@mui/material";
import { URL } from "../services/URL";
import axios from "axios";
import AuthenticationService from "../services/AuthenticationService";

const styled = {
width: "300px",
};

const Dashboard = ({ snackbar }) => {
const [displayed, setDisplayed] = useState("Category");
const [category, setCategory] = useState({
  name: "",
  description: "",
});

const [color, setColor] = useState({
  name: "",
  color_hex: "",
});
const [producer, setProducer] = useState({
  name: "",
  description: "",
  country: "",
  city: "",
  street: "",
  apartmentNum: "",
  postCode: "",
});
const [payment, setPayment] = useState({
  type: "",
  description: "",
});
const [delivery, setDelivery] = useState({
  name: "",
  price: "",
  description: "",
});

const handleSwitch = (e) => {
  setDisplayed(e.target.name);
};

const handleRequest = () => {
  if (displayed === "Category") {
    axios({
      method: "POST",
      url: `${URL}/category/addCategory`,
      data: category,
      headers: {
        authorization: AuthenticationService.getToken(),
      },
    })
      .then((res) => {
        snackbar("Category Has Been Added", "success");
        setCategory({
          name: "",
          description: "",
        });
      })
      .catch((e) => {
        snackbar("Something Went Wrong!", "error");
      });
  }

  if (displayed === "Color") {
    axios({
      method: "POST",
      url: `${URL}/colors/addColor`,
      data: color,
      headers: {
        authorization: AuthenticationService.getToken(),
      },
    })
      .then((res) => {
        snackbar("Color Has Been Added", "success");
        setColor({
          name: "",
          color_hex: "",
        });
      })
      .catch((e) => {
        snackbar("Something Went Wrong!", "error");
      });
  }

  if (displayed === "Producer") {
    axios({
      method: "POST",
      url: `${URL}/producer/addProducer`,
      data: producer,
      headers: {
        authorization: AuthenticationService.getToken(),
      },
    })
      .then((res) => {
        snackbar("Producer Has Been Added", "success");
        setProducer({
          name: "",
          description: "",
          country: "",
          city: "",
          street: "",
          apartmentNum: "",
          postCode: "",
        });
      })
      .catch((e) => {
        snackbar("Something Went Wrong!", "error");
      });
  }

  if (displayed === "Payment") {
    axios({
      method: "POST",
      url: `${URL}/payment/addPayment`,
      data: payment,
      headers: {
        authorization: AuthenticationService.getToken(),
      },
    })
      .then((res) => {
        snackbar("Payment Method Has Been Added", "success");
        setPayment({
          type: "",
          description: "",
        });
      })
      .catch((e) => {
        snackbar("Something Went Wrong!", "error");
      });
  }

  if (displayed === "Delivery") {
    axios({
      method: "POST",
      url: `${URL}/delivery/addDelivery`,
      data: delivery,
      headers: {
        authorization: AuthenticationService.getToken(),
      },
    })
      .then((res) => {
        snackbar("Delivery Method Has Been Added", "success");
        setDelivery({
          name: "",
          price: "",
          description: "",
        });
      })
      .catch((e) => {
        snackbar("Something Went Wrong!", "error");
      });
  }
};

const handleCategoryForm = ({ target: { name, value } }) => {
  setCategory({ ...category, [name]: value });
};

const handleColorForm = ({ target: { name, value } }) => {
  if (name === "color_hex" && value.match(/[A-Zg-z]/g)) return;
  if (name === "color_hex" && value.length > 6) {
    setColor({ ...color, [name]: value.slice(0, 6) });
    return;
  }
  setColor({ ...color, [name]: value });
};
const handleProducerForm = ({ target: { name, value } }) => {
  setProducer({ ...producer, [name]: value });
};
const handlePaymentFrom = ({ target: { name, value } }) => {
  setPayment({ ...payment, [name]: value });
};
const handleDeliveryForm = ({ target: { name, value } }) => {
  if (name === "price" && value < 0) return;
  setDelivery({ ...delivery, [name]: value });
};
return (
  <div className="dashboard">
    <div className="dashboard-switch">
      <button
        name="Category"
        className={
          "dashboard-switch-button " +
          (displayed === "Category" ? "current-button-displayed" : "")
        }
        onClick={handleSwitch}
      >
        Category
      </button>
      <button
        name="Color"
        className={
          "dashboard-switch-button " +
          (displayed === "Color" ? "current-button-displayed" : "")
        }
        onClick={handleSwitch}
      >
        Color
      </button>
      <button
        name="Producer"
        className={
          "dashboard-switch-button " +
          (displayed === "Producer" ? "current-button-displayed" : "")
        }
        onClick={handleSwitch}
      >
        Producer
      </button>
      <button
        name="Payment"
        className={
          "dashboard-switch-button " +
          (displayed === "Payment" ? "current-button-displayed" : "")
        }
        onClick={handleSwitch}
      >
        Payment
      </button>
      <button
        name="Delivery"
        className={
          "dashboard-switch-button " +
          (displayed === "Delivery" ? "current-button-displayed" : "")
        }
        onClick={handleSwitch}
      >
        Delivery
      </button>
    </div>
    {displayed === "Category" && (
      <div className="dashboard-form">
        <TextField
          required
          name="name"
          onChange={handleCategoryForm}
          value={category.name}
          label="Name"
          variant="standard"
          style={styled}
        />

        <TextField
          name="description"
          label="Description"
          multiline
          rows="4"
          variant="standard"
          onChange={handleCategoryForm}
          value={category.description}
        />
      </div>
    )}
    {displayed === "Color" && (
      <div className="dashboard-form">
        <TextField
          required
          name="name"
          onChange={handleColorForm}
          value={color.name}
          label="Name"
          variant="standard"
          style={styled}
        />

        <TextField
          required
          name="color_hex"
          label="color hex"
          variant="standard"
          onChange={handleColorForm}
          value={color.color_hex}
          style={styled}
        />
      </div>
    )}
    {displayed === "Producer" && (
      <div className="dashboard-form-grid">
        <div className="dashboard-form-left">
          <TextField
            required
            name="name"
            onChange={handleProducerForm}
            value={producer.name}
            label="Name"
            variant="standard"
            style={styled}
          />

          <TextField
            name="description"
            label="Description"
            multiline
            rows="4"
            variant="standard"
            onChange={handleProducerForm}
            value={producer.description}
          />
        </div>
        <div className="dashboard-form-right">
          <TextField
            name="country"
            onChange={handleProducerForm}
            value={producer.country}
            label="Country"
            variant="standard"
            className="grid-r"
            style={{ gridRow: "1/2" }}
          />
          <TextField
            name="city"
            onChange={handleProducerForm}
            value={producer.city}
            label="City"
            variant="standard"
            className="grid-r"
            style={{ gridRow: "2/3" }}
          />
          <TextField
            name="street"
            onChange={handleProducerForm}
            value={producer.street}
            label="Street"
            variant="standard"
            className="grid-r"
            style={{ gridRow: "3/4" }}
          />
          <TextField
            name="apartmentNum"
            onChange={handleProducerForm}
            value={producer.apartmentNum}
            label="Apartment / Suite"
            variant="standard"
            className="grid-r"
            style={{ gridRow: "4/5" }}
          />
          <TextField
            name="postCode"
            onChange={handleProducerForm}
            value={producer.postCode}
            label="Postal Code"
            variant="standard"
            className="grid-r"
            style={{ gridRow: "5/6" }}
          />
        </div>
      </div>
    )}
    {displayed === "Payment" && (
      <div className="dashboard-form">
        <TextField
          required
          name="type"
          onChange={handlePaymentFrom}
          value={payment.name}
          label="Name"
          variant="standard"
          style={styled}
        />

        <TextField
          name="description"
          label="Description"
          multiline
          rows="4"
          variant="standard"
          onChange={handlePaymentFrom}
          value={payment.description}
        />
      </div>
    )}
    {displayed === "Delivery" && (
      <div className="dashboard-form">
        <TextField
          required
          name="name"
          onChange={handleDeliveryForm}
          value={delivery.name}
          label="Name"
          variant="standard"
          style={styled}
        />

        <TextField
          required
          name="price"
          onChange={handleDeliveryForm}
          value={delivery.price}
          label="price"
          variant="standard"
          style={styled}
          type="number"
        />

        <TextField
          name="description"
          label="Description"
          multiline
          rows="4"
          variant="standard"
          onChange={handleDeliveryForm}
          value={delivery.description}
        />
      </div>
    )}
    <button onClick={() => handleRequest()} className="dashboard-send-button">
      Send Data!
    </button>
  </div>
);
};

export default Dashboard;
