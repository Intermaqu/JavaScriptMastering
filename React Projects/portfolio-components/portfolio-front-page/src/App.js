import React from "react";
import FrontPageWelcome from "./components/FrontPageWelcome";
import "./app.css";

const App = () => {
    return (
        <div className="app">
            <FrontPageWelcome leftColor="#f5f5f5" rightColor="#5f5f5f" />
            <div className="app__body">
                <h1>PAGE CONTENT</h1>
            </div>
        </div>
    );
};

export default App;
