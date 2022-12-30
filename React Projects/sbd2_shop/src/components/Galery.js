import React from "react";
import photo from "../images/display.png";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.png";
import photo4 from "../images/photo4.png";
import "../styles/galery.css";

const Galery = () => {
  const [displayed, setDisplayed] = React.useState(photo);

  return (
    <div className="galery">
      <div className="galery--left-col">
        <img
          src={photo}
          className="small-image"
          onClick={() => setDisplayed(photo)}
        />
        <img
          src={photo2}
          className="small-image"
          onClick={() => setDisplayed(photo2)}
        />
        <img
          src={photo3}
          className="small-image"
          onClick={() => setDisplayed(photo3)}
        />
        <img
          src={photo4}
          className="small-image"
          onClick={() => setDisplayed(photo4)}
        />
      </div>
      <img src={displayed} className="big-image" />
    </div>
  );
};

export default Galery;
