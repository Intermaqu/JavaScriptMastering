import "./App.css";
import ThemeContext from "./ThemeContext";
import React, { useState } from "react";
import CustomButton from "./components/CustomButton";
import CustomCheckbox from "./components/CustomCheckbox";
import CustomInput from "./components/CustomInput";
import CustomDropdown from "./components/CustomDropdown";

function App() {
    const [theme, setTheme] = useState("light");
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    });
    const [inputValue, setInputValue] = useState("");
    const [dropdownValue, setDropdownValue] = useState("Todo");

    const WIDTH = "400px";

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div className={`App ${theme}`}>
                <CustomButton
                    name="Click me"
                    callback={toggleTheme}
                    width={WIDTH}
                    type="PrimaryL"
                />
                <CustomButton
                    name="Click me"
                    callback={toggleTheme}
                    width={WIDTH}
                    type="PrimaryS"
                />
                <CustomButton
                    name="Click me"
                    callback={toggleTheme}
                    width={WIDTH}
                    type="Secondary"
                />
                <CustomButton
                    name="Click me"
                    callback={toggleTheme}
                    width={WIDTH}
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
                    width={WIDTH}
                />
                <CustomCheckbox
                    text="Checkbox2"
                    checked={checkboxes.checkbox2}
                    onClickCheck={() =>
                        setCheckboxes({
                            ...checkboxes,
                            checkbox2: !checkboxes.checkbox2,
                        })
                    }
                    width={WIDTH}
                />
                <CustomCheckbox
                    text="Checkbox3"
                    checked={checkboxes.checkbox3}
                    onClickCheck={() =>
                        setCheckboxes({
                            ...checkboxes,
                            checkbox3: !checkboxes.checkbox3,
                        })
                    }
                    width={WIDTH}
                />
                <CustomDropdown
                    value={dropdownValue}
                    setValue={setDropdownValue}
                    options={[
                        { id: 1, name: "Todo" },
                        { id: 2, name: "Doing" },
                        { id: 3, name: "Done" },
                    ]}
                    width={WIDTH}
                />
                <CustomInput
                    value={inputValue}
                    onChangeValue={setInputValue}
                    isValid={inputValue.length > 0}
                    placeholder="Enter task name"
                    width={WIDTH}
                />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
