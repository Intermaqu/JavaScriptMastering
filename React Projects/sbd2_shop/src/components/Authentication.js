import React, { useState } from "react";
import "../styles/authentication.css";
import { TextField, MenuItem, Select, InputLabel } from "@mui/material";

const Authentication = () => {
  const [isLoginShown, setIsLoginShown] = useState(true);
  const [genter, setGender] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    gender: "",
    email: "",
    password: "",
    country: "",
    city: "",
    street: "",
    apartmentNum: "",
    postCode: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const setRegister = () => {
    setIsLoginShown(false);
  };
  const setLogin = () => {
    setIsLoginShown(true);
  };

  const handleChangeRegister = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleChangeLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div className="authentication flex">
      <h1>My Account</h1>
      <div className="flex authentication-switch">
        <button
          className={isLoginShown ? "authentication-switch-picked" : ""}
          onClick={() => setLogin()}
        >
          Sign in
        </button>
        <button
          className={!isLoginShown ? "authentication-switch-picked" : ""}
          onClick={() => setRegister()}
        >
          Register
        </button>
      </div>
      {isLoginShown ? (
        <div className="authentication-login">
          <TextField
            label="Email"
            variant="standard"
            name="email"
            value={loginData.email}
            onChange={handleChangeLogin}
          />
          <TextField
            id="outlined-password-input"
            name="password"
            onChange={handleChangeLogin}
            label="Password"
            type="password"
            value={loginData.password}
            autoComplete="current-password"
            variant="standard"
          />
          <button className="authentication-login-button" onClick={()=>console.log(loginData)}>SIGN IN</button>
        </div>
      ) : (
        <div className="authentication-register">
          <TextField
            name="name"
            onChange={handleChangeRegister}
            value={userData.name}
            label="Name"
            variant="standard"
            className="grid-l"
            style={{ gridRow: "1/2" }}
          />
          <TextField
            name="surname"
            onChange={handleChangeRegister}
            value={userData.surname}
            label="Surname"
            variant="standard"
            className="grid-l"
            style={{ gridRow: "2/3" }}
          />
          <TextField
            name="gender"
            onChange={handleChangeRegister}
            value={userData.gender ? userData.gender : ""}
            id="select"
            label="Gender"
            select
            variant="standard"
            className="grid-l"
            style={{ gridRow: "3/4" }}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
          <TextField
            name="email"
            onChange={handleChangeRegister}
            value={userData.email}
            label="Email"
            variant="standard"
            className="grid-l"
            style={{ gridRow: "4/5" }}
          />
          <TextField
            name="password"
            onChange={handleChangeRegister}
            value={userData.password}
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            className="grid-l"
            style={{ gridRow: "5/6" }}
          />
          <TextField
            name="country"
            onChange={handleChangeRegister}
            value={userData.country}
            label="Country"
            variant="standard"
            className="grid-r"
            style={{ gridRow: "1/2" }}
          />
          <TextField
            name="city"
            onChange={handleChangeRegister}
            value={userData.city}
            label="City"
            variant="standard"
            className="grid-r"
            style={{ gridRow: "2/3" }}
          />
          <TextField
            name="street"
            onChange={handleChangeRegister}
            value={userData.street}
            label="Street"
            variant="standard"
            className="grid-r"
            style={{ gridRow: "3/4" }}
          />
          <TextField
            name="apartmentNum"
            onChange={handleChangeRegister}
            value={userData.apartmentNum}
            label="Apartment / Suite"
            variant="standard"
            className="grid-r"
            style={{ gridRow: "4/5" }}
          />
          <TextField
            name="postCode"
            onChange={handleChangeRegister}
            value={userData.postCode}
            label="Postal Code"
            variant="standard"
            className="grid-r"
            style={{ gridRow: "5/6" }}
          />
          <button className="authentication-register-button">REGISTER</button>
        </div>
      )}
    </div>
  );
};

export default Authentication;
