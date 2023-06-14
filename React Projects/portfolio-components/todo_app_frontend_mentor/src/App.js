import "./App.css";
import ThemeContext from "./ThemeContext";
import React, { useState } from "react";
import CustomButton from "./components/CustomButton";
import CustomCheckbox from "./components/CustomCheckbox";

function App() {
    const [theme, setTheme] = useState("light");
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    });

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div className={`App ${theme}`}>
                <CustomButton
                    name="Click me"
                    callback={toggleTheme}
                    width="200px"
                    type="PrimaryL"
                />
                <CustomButton
                    name="Click me"
                    callback={toggleTheme}
                    width="200px"
                    type="PrimaryS"
                />
                <CustomButton
                    name="Click me"
                    callback={toggleTheme}
                    width="200px"
                    type="Secondary"
                />
                <CustomButton
                    name="Click me"
                    callback={toggleTheme}
                    width="200px"
                    type="Destructive"
                />
                <CustomCheckbox
                    text="Checkbox1"
                    checked={checkboxes.checkbox1}
                    onClickCheck={() =>
                        setCheckboxes({
                            ...checkboxes,
                            checkbox1: !checkboxes.checkbox1,
                        })
                    }
                    width="200px"
                />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
