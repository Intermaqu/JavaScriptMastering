import React, { useEffect, useState } from "react";
import ChoosePick from "./components/ChoosePick";
import Header from "./components/Header";
import "./styles/app.css";
import "./styles/general.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [pick, setPick] = useState();
  const [isPicked, setIsPicked] = useState(false);

  const handlePick = (myPick) => {
    setIsPicked(true);
    setPick(myPick);
  };

  const callValue = (val) => {
    console.log(val)
  }

  const handleResult = (result) => {
    // if result === true player won
    // increment his score
    // otherwise decrement his score
    result
      ? setCurrentScore((prev) => prev + 1)
      : setCurrentScore((prev) => prev - 1);
  };

  useEffect(() => {
    console.log(pick);
  }, [pick]);

  return (
    <div className="app">
      <Header currentScore={currentScore} />
      <ChoosePick handlePick = {(val)=>handlePick(val)}/>
      <div className="app--rules-container">
        <p>Rules</p>
      </div>
    </div>
  );
}

export default App;
