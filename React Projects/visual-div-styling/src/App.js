import React, { useState } from "react";

const App = () => {
  const [topLeftBorderRadius, setTopLeftBorderRadius] = useState(0);
  const [topRightBorderRadius, setTopRightBorderRadius] = useState(0);
  const [bottomLeftBorderRadius, setBottomLeftBorderRadius] = useState(0);
  const [bottomRightBorderRadius, setBottomRightBorderRadius] = useState(0);
  const [unit, setUnit] = useState("%");

  const maxBorder = 100;

  const boxStyle = {
    borderRadius: `${topLeftBorderRadius}${unit} ${topRightBorderRadius}${unit} ${bottomLeftBorderRadius}${unit} ${bottomRightBorderRadius}${unit}`,
    width: "200px",
    height: "200px",
    backgroundColor: "red",
  };

  return (
    <div className="app">
      <div className="app-left">
        <label>Top Left: {topLeftBorderRadius}</label>
        <input
          type="range"
          min="0"
          max={maxBorder}
          value={topLeftBorderRadius}
          onChange={(e) => {
            setTopLeftBorderRadius(e.target.value);
          }}
        />
        <label>Top Right: {topRightBorderRadius}</label>
        <input
          type="range"
          min="0"
          max={maxBorder}
          value={topRightBorderRadius}
          onChange={(e) => {
            setTopRightBorderRadius(e.target.value);
          }}
        />
        <label>Bottom Right: {bottomLeftBorderRadius}</label>
        <input
          type="range"
          min="0"
          max={maxBorder}
          value={bottomLeftBorderRadius}
          onChange={(e) => {
            setBottomLeftBorderRadius(e.target.value);
          }}
        />
        <label>Bottom Left: {bottomRightBorderRadius}</label>
        <input
          type="range"
          min="0"
          max={maxBorder}
          value={bottomRightBorderRadius}
          onChange={(e) => {
            setBottomRightBorderRadius(e.target.value);
          }}
        />
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="%">%</option>
          <option value="px">px</option>
        </select>
      </div>
      <div className="app-right">
        <div className="app-right-box" style={boxStyle}></div>
      </div>
    </div>
  );
};

export default App;
