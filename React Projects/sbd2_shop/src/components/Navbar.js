import React from "react";
import logo from "../images/logo_text_nobg_cut.png";
import user_icon from "../images/user_icon.svg";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="navbar--logo" alt="logo" />
      <img src={user_icon} className="navbar--user icon" alt="user" />
    </nav>
  );
};

export default Navbar;