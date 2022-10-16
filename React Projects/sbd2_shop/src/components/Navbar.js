import React from "react";
import logo from "../images/logo_text_nobg_cut.png";
import user_icon from "../images/user_icon.svg";
import cart_icon from "../images/cart_icon.svg";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="navbar--logo" />
      <img src={cart_icon} className="navbar--cart" />
      <img src={user_icon} className="navbar--user" />
    </nav>
  );
};

export default Navbar;
