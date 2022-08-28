import React from "react";
import "../styles/pick.css";

const Pick = (props) => {


  return (
    <div
      className={`pick-container ${props.value}-container ${props.additionalClass} ${props.size}`}
      onClick = {()=>props.handlePick(props.value)}
    >
      <div className="pick-image-container">
        <img
          src={`./images/icon-${props.value}.svg`}
          className={`${props.value}-icon`}
        />
      </div>
    </div>
  );
};

export default Pick;
