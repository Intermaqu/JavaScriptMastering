import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, MenuItem, Select, InputLabel } from "@mui/material";
import { URL } from "../services/URL";
import axios from "axios";
import AuthenticationService from "../services/AuthenticationService";
import imagesNames from "../images/allImagesNames";
import "../styles/new-product.css";

const NewProduct = ({ snackbar }) => {
  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    description: "",
    status: "Posted",
    id_producer: "",
    id_category: "",
    id_color: "",
    photo_1: "",
    photo_2: "",
    photo_3: "",
    photo_4: "",
    id_user: "",
  });
  // (ID_PRODUCT) (ID_GALERY)

  const [allProducers, setAllProducers] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [allColors, setAllColors] = useState([]);
  const navigate = useNavigate()

  const handleChangeProduct = (e) => {
    if (e.target.name === "price" && e.target.value < 0) return;
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const getAllProducers = () => {
    axios({
      method: "GET",
      url: `${URL}/producer/getAllProducers`,
    }).then((res) => {
      setAllProducers(res.data);
      console.log(res.data);
    });
  };

  const getAllCategory = () => {
    axios({
      method: "GET",
      url: `${URL}/category/getAllCategory`,
    }).then((res) => {
      setAllCategory(res.data);
      console.log(res.data);
    });
  };

  const getAllColors = () => {
    axios({
      method: "GET",
      url: `${URL}/colors/getAllColors`,
    }).then((res) => {
      setAllColors(res.data);
      console.log(res.data);
    });
  };

  const handleAddProduct = () => {
    axios({
      method: "POST",
      url: `${URL}/product/addNewProduct`,
      data: productData,
    })
      .then((res) => {
        console.log(res.data);
        snackbar("Logged in Successfully!", "success");
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        snackbar("Something Went Wrong!", "error");
      });
  };

  useEffect(() => {
    const userData = AuthenticationService.getUserData();
    setProductData({ ...productData, id_user: userData.ID_USER });
  }, []);
  useEffect(getAllProducers, []);
  useEffect(getAllCategory, []);
  useEffect(getAllColors, []);

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  return (
    <div className="new-product">
      <div className="new-product--row">
        <TextField
          required
          name="name"
          onChange={handleChangeProduct}
          value={productData.name}
          label="Name"
          variant="standard"
        />
        <TextField
          required
          name="price"
          onChange={handleChangeProduct}
          value={productData.price}
          label="Price"
          variant="standard"
          type="number"
        />
        <TextField
          required
          name="description"
          label="description"
          multiline
          rows="4"
          variant="standard"
          onChange={handleChangeProduct}
          value={productData.description}
        />
      </div>

      <div className="new-product--row">
        <TextField
          required
          select
          label="producer"
          variant="standard"
          name="id_producer"
          onChange={handleChangeProduct}
          value={productData.id_producer}
          style={{ width: "150px" }}
        >
          {allProducers &&
            allProducers.map((producer) => (
              <MenuItem key={producer.ID_PRODUCER} value={producer.ID_PRODUCER}>
                {producer.Name}
              </MenuItem>
            ))}
        </TextField>
        <TextField
          required
          select
          label="category"
          variant="standard"
          name="id_category"
          onChange={handleChangeProduct}
          value={productData.id_category}
          style={{ width: "150px" }}
        >
          {allCategory &&
            allCategory.map((category) => (
              <MenuItem key={category.ID_CATEGORY} value={category.ID_CATEGORY}>
                {category.Name}
              </MenuItem>
            ))}
        </TextField>
        <TextField
          required
          select
          label="color"
          variant="standard"
          name="id_color"
          onChange={handleChangeProduct}
          value={productData.id_color}
          style={{ width: "150px" }}
        >
          {allColors &&
            allColors.map((color) => (
              <MenuItem key={color.ID_COLOR} value={color.ID_COLOR}>
                {color.Name}
              </MenuItem>
            ))}
        </TextField>
      </div>
      <div className="new-product--row">
        <TextField
          required
          select
          label="Main Photo"
          variant="standard"
          name="photo_1"
          onChange={handleChangeProduct}
          value={productData.photo_1}
          style={{ width: "150px" }}
        >
          {imagesNames &&
            imagesNames.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
        </TextField>
        <TextField
          select
          label="Photo 2"
          variant="standard"
          name="photo_2"
          onChange={handleChangeProduct}
          value={productData.photo_2}
          style={{ width: "150px" }}
        >
          {imagesNames &&
            imagesNames.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
        </TextField>
        <TextField
          select
          label="Photo 3"
          variant="standard"
          name="photo_3"
          onChange={handleChangeProduct}
          value={productData.photo_3}
          style={{ width: "150px" }}
        >
          {imagesNames &&
            imagesNames.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
        </TextField>
        <TextField
          select
          label="Photo 4"
          variant="standard"
          name="photo_4"
          onChange={handleChangeProduct}
          value={productData.photo_4}
          style={{ width: "150px" }}
        >
          {imagesNames &&
            imagesNames.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
        </TextField>
      </div>
      <button onClick={handleAddProduct} className="new-product--button">
        ADD PRODUCT
      </button>
    </div>
  );
};

export default NewProduct;
