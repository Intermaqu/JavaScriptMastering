import React from "react";
import "../styles/header.css"

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <p className="header--pick">Rock</p>
        <p className="header--pick">Paper</p>
        <p className="header--pick">Scissors</p>
      </div>
      <div className="header--score">
        <p>score</p>
        <h1>{props.currentScore}</h1>
      </div>
    </div>
  );
};

export default Header;
