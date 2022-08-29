import React from "react";
import Pick from "./Pick";

import "../styles/skirmish.css";

const Skirmish = (props) => {
  return (
    <div className="skirmish">
      <Pick pick={props.pick} size="big-pick" />
      {props.isFinished && <div className="skirmish--result">
        <h1>YOU {props.result}</h1>
        <button className="skirmish--restart-game" onClick={props.handleFinishGame}>
          restart game
        </button>
      </div>}
      {props.generated ? (
        <Pick pick={props.generated} size="big-pick" />
      ) : (
        <div className="skirmish--empty-pick"></div>
      )}
    </div>
  );
};

export default Skirmish;
