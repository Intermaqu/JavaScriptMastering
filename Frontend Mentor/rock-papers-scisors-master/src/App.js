import React, { useEffect, useState } from "react";
import ChoosePick from "./components/ChoosePick";
import Header from "./components/Header";
import Skirmish from "./components/Skirmish";
import "./styles/app.css";
import "./styles/general.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [pick, setPick] = useState()
  const [isPicked, setIsPicked] = useState(false)
  const [generated, setGenerated] = useState(undefined)
  const [isFinished, setIsFinished] = useState(false)
  const [result, setResult] = useState("waiting")

  const handlePick = (myPick) => {
    setIsPicked(true)
    setPick(myPick)
  };

  const handleResult = () => {
    if (!isFinished) return "waiting";
    console.log("handleResult:", pick, generated)
    const winning = {
      "scissors": "paper",
      "rock": "scissors",
      "paper": "rock"
    }
    if (pick === generated)
      return "draw"
    
    if(winning[pick] === generated)
      return "won"
    return "lose"
  };

  const generateRandomPick = () => {
    let generate;
    const picks = ["rock", "paper", "scissors"];
    if (isPicked) {
      generate = picks[Math.floor(Math.random() * picks.length)];
    }
    setGenerated(generate);
    setIsFinished(true)
  };
  

  useEffect(()=>{
    generateRandomPick()
  },[isPicked])

  useEffect(()=>{
    console.log(handleResult())
  },[isFinished])

  return (
    <div className="app">
      <Header currentScore={currentScore} />
      {!isPicked ? (
        <ChoosePick handlePick={(val) => handlePick(val)} />
      ) : (
        <Skirmish pick={pick} generated={generated} />
      )}
      <div className="app--rules-container">
        <p>Rules</p>
      </div>
    </div>
  );
}

export default App;
