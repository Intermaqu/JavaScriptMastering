import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo_text_nobg_cut.png";
import user_icon from "../images/user_icon.svg";
import AuthenticationService from "../services/AuthenticationService";
import "../styles/navbar.css";
import add_svg from "../images/add-circle.svg";
import gear_icon from "../images/gear.png";

const addButtonStyles = {
  width: "20px",
  height: "20px",
  cursor: "pointer",
  marginLeft: "10px",
};

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <img
        src={logo}
        className="navbar--logo"
        alt="logo"
        onClick={() => navigate(`/`)}
      />
      <img
        src={user_icon}
        className="navbar--user icon"
        alt="user_account"
        onClick={() => navigate("/userAccount")}
        style={addButtonStyles}
      />
      <img
        src={gear_icon}
        className="navbar--user icon"
        alt="dashboard"
        onClick={() => navigate("/dashboard")}
        style={addButtonStyles}
      />
      {AuthenticationService.isUserLoggedIn() && (
        <img
          src={add_svg}
          onClick={() => navigate(`/addNewProduct`)}
          style={addButtonStyles}
        />
      )}
    </nav>
  );
};

export default Navbar;
