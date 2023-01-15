import React, { useState } from "react";
import "../styles/dashboard.css";
import { TextField } from "@mui/material";

const styled = {
  width: "300px",
};

const Dashboard = () => {
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
    if (displayed === "Category") console.log(category);

    if (displayed === "Color") console.log(color);

    if (displayed === "Producer") console.log(producer);

    if (displayed === "Payment") console.log(payment);

    if (displayed === "Delivery") console.log(delivery);
  };

  const handleCategoryForm = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleColorForm = (e) => {
    setColor({ ...color, [e.target.name]: e.target.value });
  };
  const handleProducerForm = (e) => {
    setProducer({ ...producer, [e.target.name]: e.target.value });
  };
  const handlePaymentFrom = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };
  const handleDeliveryForm = (e) => {
    if (e.target.name === "price" && e.target.value < 0) return;
    setDelivery({ ...delivery, [e.target.name]: e.target.value });
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
            multiline
            rows="4"
            variant="standard"
            onChange={handleColorForm}
            value={color.color_hex}
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
