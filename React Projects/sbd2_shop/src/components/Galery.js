import React, { useEffect, useState } from "react";
import "../styles/galery.css";

const Galery = ({ photo_1, photo_2, photo_3, photo_4 }) => {
  const [displayed, setDisplayed] = useState();

  useEffect(() => {
    setDisplayed(photo_1);
  }, [photo_1]);
  return (
    <div className="galery">
      <div className="galery--left-col">
        {photo_1 && (
          <img
            src={`./assets/productImages/${photo_1}`}
            className="small-image"
            onClick={() => setDisplayed(photo_1)}
          />
        )}
        {photo_2 && (
          <img
            src={`./assets/productImages/${photo_2}`}
            className="small-image"
            onClick={() => setDisplayed(photo_2)}
          />
        )}
        {photo_3 && (
          <img
            src={`./assets/productImages/${photo_3}`}
            className="small-image"
            onClick={() => setDisplayed(photo_3)}
          />
        )}
        {photo_4 && (
          <img
            src={`./assets/productImages/${photo_4}`}
            className="small-image"
            onClick={() => setDisplayed(photo_4)}
          />
        )}
      </div>
      <img src={`./assets/productImages/${displayed}`} className="big-image" />
    </div>
  );
};

export default Galery;
