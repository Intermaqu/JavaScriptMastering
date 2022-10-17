import React, { useEffect, useState } from "react";
import "./styles/app.css"

function App() {
  const [people, setPeople] = useState(1);
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState("");

  useEffect(()=>{
    console.log(tip)
  },[tip])

  return (
    <div className="app">
      <div className="app-counter">
        <p>Bill</p>
        <input type="number" />
        <p>Select Tip %</p>
        <div className="app-counter-grid">
          <button>5%</button>
          <button>5%</button>
          <button>5%</button>
          <button>5%</button>
          <button>5%</button>
          <input
            type="number"
            min="0"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
            placeholder="Custom"
          />
        </div>
        <p>Number Of People</p>
        <input
          type="number"
          min="0"
          step="1"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
      </div>
      <div className="app-result"></div>
    </div>
  );
}

export default App;
