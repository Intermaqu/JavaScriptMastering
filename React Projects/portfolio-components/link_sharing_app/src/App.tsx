import "./App.css";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
import "./style/general.css";
import { useState, useEffect } from "react";
import CustomDropdown from "./components/CustomDropdown";
import CustomTab from "./components/CustomTab";
import CustomUploadPhoto from "./components/CustomUploadPhoto";
import LoginPage from "./Pages/LoginPage";
import React from "react";
import RegisterPage from "./Pages/RegisterPage";
import Header from "./components/Header";
import LinkComponent from "./components/LinkComponent";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const dropdownOptions = [
    { id: 1, name: "Option 1", icon: "github" },
    { id: 2, name: "Option 2", icon: "youtube" },
    { id: 3, name: "Option 3", icon: "linkedin" },
  ];
  const [dropdownValue, setDropdownValue] = useState(dropdownOptions[0]);
  const [photo, setPhoto] = useState<string>("");

  useEffect(() => {
    const localPhoto = localStorage.getItem("photo");
    // console.log("localPhoto:", localPhoto);
    if (localPhoto && Object.keys(localPhoto).length > 0) {
      setPhoto(localPhoto);
    }
  }, []);

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
      {/* <RegisterPage /> */}
      <Header />
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <LinkComponent
          profileImage={photo}
          name="Jakub Raczkiewicz"
          email="intermaqu@gmail.com"
          links={[
            {
              link: "github.com",
              icon: "github",
              id: "1",
            },
            {
              link: "github.com",
              icon: "github",
              id: "2",
            },
            {
              link: "github.com",
              icon: "github",
              id: "3",
            },
            {
              link: "github.com",
              icon: "github",
              id: "4",
            },
            {
              link: "github.com",
              icon: "github",
              id: "5",
            },
            {
              link: "github.com",
              icon: "github",
              id: "6",
            },
          ]}
        />
        <div className="right"></div>
      </div>
    </div>
  );
}

export default App;
