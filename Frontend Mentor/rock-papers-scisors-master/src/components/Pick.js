import React from "react";
import "../styles/pick.css";

const Pick = (props) => {
  return (
    <div
      className={`pick-container ${props.pick}-container ${props.additionalClass} ${props.size}`}
      onClick={
        props.handlePick ? () => props.handlePick(props.pick) : undefined
      }
    >
      <div className="pick-image-container">
        <img
          src={`./images/icon-${props.pick}.svg`}
          className={`${props.pick}-icon`}
        />
      </div>
    </div>
  );
};

export default Pick;
