import React from "react";
import Pick from "./Pick"
import "../styles/picks.css"

const ChoosePick = (props) => {

  return (
    <div className="picks">
      <Pick
        size="small-pick"
        pick="paper"
        handlePick={(val) => props.handlePick(val)}
        />
      <Pick
        pick="scissors"
        size="small-pick"
        handlePick={(val) => props.handlePick(val)}
        />
      <Pick
        pick="rock"
        size="small-pick"
        additionalClass="two-column-pick"
        handlePick={(val) => props.handlePick(val)}
      />
    </div>
  );
};

export default ChoosePick;
