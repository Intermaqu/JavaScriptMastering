import React, { useState } from "react";
import "./styles/app.css";
import "./styles/general.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div className="app">
      <div className="app--score">
        <div>
          <p className="app--score--pick">Rock</p>
          <p className="app--score--pick">Paper</p>
          <p className="app--score--pick">Scissors</p>
        </div>
        <div className="app--score--score">
          <p>score</p>
          <h1>{currentScore}</h1>
        </div>
      </div>
      <div className="app--picks">
        <div className="pick-container paper-container">
          <div className="pick-image-container">
            <img src="./images/icon-paper.svg" className="paper-icon" />
          </div>
        </div>
        <div className="pick-container scissors-container">
          <div className="pick-image-container">
            <img src="./images/icon-scissors.svg" className="scissors-icon" />
          </div>
        </div>
        <div className="pick-container rock-container">
          <div className="pick-image-container">
            <img src="./images/icon-rock.svg" className="rock-icon" />
          </div>
        </div>
      </div>
      <div className="app--rules-container">
        <p>Rules</p>
      </div>
    </div>
  );
}

export default App;
