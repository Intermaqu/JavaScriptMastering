import "./App.css";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
import "./style/general.css";
import { useState } from "react";
import CustomDropdown from "./components/CustomDropdown";
import CustomTab from "./components/CustomTab";
import CustomUploadPhoto from "./components/CustomUploadPhoto";
import LoginPage from "./Pages/LoginPage";
import React from "react";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  const [inputValue, setInputValue] = useState("");
  const dropdownOptions = [
    { id: 1, name: "Option 1", icon: "github" },
    { id: 2, name: "Option 2", icon: "youtube" },
    { id: 3, name: "Option 3", icon: "linkedin" },
  ];
  const [dropdownValue, setDropdownValue] = useState(dropdownOptions[0]);

  return (
    <div className="App">
      {/*       
      <CustomButton
        type="primary"
        text="Button"
        width="200px"
        isDisabled
        onClick={undefined}
      />
      <CustomButton
        type="primary"
        text="Button"
        width="200px"
        onClick={undefined}
      />
      <br />
      <CustomButton
        type="secondary"
        text="Button"
        width="200px"
        isDisabled
        onClick={undefined}
      />
      <CustomButton
        type="secondary"
        text="Button"
        width="200px"
        onClick={undefined}
      />
      <br />
      <CustomInput
        value={inputValue}
        onChangeValue={setInputValue}
        width="400px"
        // isValid={false}
        icon="github"
      />
      <CustomDropdown
        value={dropdownValue}
        setValue={setDropdownValue}
        options={dropdownOptions}
        width="400px"
      />
      <CustomTab
        text="Tab 1"
        icon=""
        active={true}
        onClick={() => console.log("Tab 1 clicked")}
      />
      <CustomTab
        text="Tab 2"
        icon=""
        active={false}
        onClick={() => console.log("Tab 1 clicked")}
      />
      <CustomUploadPhoto
        onChange={(e) =>
          e.target === null
            ? console.log("ABC")
            : console.log(e.target.files?.[0])
        }
      /> */}
      {/* <LoginPage /> */}
      <RegisterPage />
    </div>
  );
}

export default App;
