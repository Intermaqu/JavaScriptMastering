import "./App.css";
import ThemeContext from "./ThemeContext";
import React, { useState } from "react";
import CustomButton from "./components/CustomButton";
import CustomCheckbox from "./components/CustomCheckbox";
import CustomInput from "./components/CustomInput";
import CustomDropdown from "./components/CustomDropdown";
import Task from "./components/Task";
import Column from "./components/Column";
import Board from "./components/Board";
import data from "./data.json";
import Sidebar from "./components/Sidebar";

function App() {
    const [theme, setTheme] = useState("light");
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    });
    const [inputValue, setInputValue] = useState("");
    const [dropdownValue, setDropdownValue] = useState("Todo");

    const [state, setState] = useState(data.data);
    const [init, setInit] = useState(0);

    const [selectedBoard, setSelectedBoard] = useState(1);

    const WIDTH = "400px";

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const handleSelectBoard = (id) => {
        console.log(id);
        setSelectedBoard(id);
    };

    const handleInit = () => {
        setInit(1);
    };

    return (
        <ThemeContext.Provider value={theme}>
            {/* <main className={`App ${theme}`}>
                <CustomButton
                    name="Click me"
                    callback={handleInit}
                    width={WIDTH}
                    type="PrimaryL"
                />
                <Board columns={state[init].columns} handleInit={handleInit} />
            </main> */}
            <Sidebar
                boards={data.data}
                selectBoard={handleSelectBoard}
                selectedId={selectedBoard}
                toggleTheme={toggleTheme}
                // hideBoard={() => {}}
            />
        </ThemeContext.Provider>
    );
}

export default App;
