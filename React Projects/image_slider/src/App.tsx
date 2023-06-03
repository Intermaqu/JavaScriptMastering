import React from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import js from "./assets/images/js.png";
import react from "./assets/images/react.png";

function App() {
    return (
        <div className="App">
            <ImageSlider cilentImage={js} expectedImage={react} />
        </div>
    );
}

export default App;
