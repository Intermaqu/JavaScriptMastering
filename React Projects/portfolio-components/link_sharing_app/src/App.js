import "./App.css";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
import "./style/general.css";
import { useState } from "react";
import CustomDropdown from "./components/CustomDropdown";

function App() {
    const [inputValue, setInputValue] = useState("");
    const dropdownOptions = [
        { id: 1, name: "Option 1" },
        { id: 2, name: "Option 2" },
        { id: 3, name: "Option 3" },
    ];
    const [dropdownValue, setDropdownValue] = useState(dropdownOptions[0]);

    return (
        <div className="App">
            <CustomButton
                type="primary"
                text="Button"
                width="200px"
                isDisabled
            />
            <CustomButton type="primary" text="Button" width="200px" />
            <br />
            <CustomButton
                type="secondary"
                text="Button"
                width="200px"
                isDisabled
            />
            <CustomButton type="secondary" text="Button" width="200px" />
            <br />
            <CustomInput
                value={inputValue}
                onChangeValue={setInputValue}
                width="400px"
                // isValid={false}
            />
            <CustomDropdown
                value={dropdownValue}
                setValue={setDropdownValue}
                options={dropdownOptions}
                width="400px"
            />
        </div>
    );
}

export default App;
