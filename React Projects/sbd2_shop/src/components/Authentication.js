import React, { useState } from "react";
import "../styles/authentication.css";
import { TextField, MenuItem, Select, InputLabel } from "@mui/material";

const Authentication = () => {
  const [isLoginShown, setIsLoginShown] = useState(true);
  const [genter, setGender] = useState("");

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const setRegister = () => {
    setIsLoginShown(false);
  };
  const setLogin = () => {
    setIsLoginShown(true);
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
          <TextField label="Email" variant="standard" />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <button className="authentication-login-button">SIGN IN</button>
        </div>
      ) : (
        <div className="authentication-register">
          <TextField
            label="Name"
            variant="standard"
            className="grid-l"
            style={{ gridRow: "1/2" }}
          />
          <TextField
            label="Surname"
            variant="standard"
            className="grid-l"
            style={{ gridRow: "2/3" }}
          />
          <TextField
            id="select"
            label="Gender"
            value=""
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
            label="Email"
            variant="standard"
            className="grid-l"
            style={{ gridRow: "4/5" }}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            className="grid-l"
            style={{ gridRow: "5/6" }}
          />
          <TextField
            label="Country"
            variant="standard"
            className="grid-r"
            style={{ gridRow: "1/2" }}
          />
          <TextField
            label="City"
            variant="standard"
            className="grid-r"
            style={{ gridRow: "2/3" }}
          />
          <TextField
            label="Street"
            variant="standard"
            className="grid-r"
            style={{ gridRow: "3/4" }}
          />
          <TextField
            label="Apartment / Suite"
            variant="standard"
            className="grid-r"
            style={{ gridRow: "4/5" }}
          />
          <TextField
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
