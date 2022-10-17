import React from "react";
import photo from "../images/display.png";
import "../styles/galery.css";

const Galery = () => {
  return (
    <div className="galery">
      <div className="galery--left-col">
        <img src={photo} className="small-image" />
        <img src={photo} className="small-image" />
        <img src={photo} className="small-image" />
        <img src={photo} className="small-image" />
      </div>
      <img src={photo} className="big-image" />
    </div>
  );
};

export default Galery;
