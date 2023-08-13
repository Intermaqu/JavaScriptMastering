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
import CustomizeLinksComponent from "./components/CustomizeLinksComponent";
import { nanoid } from "nanoid";
import ProfileDetails from "./components/ProfileDetails";

interface ILink {
  link: string;
  icon: string;
  id: string;
}

interface IUserData {
  name?: string;
  surname?: string;
  email: string;
  password: string;
  photo?: string;
  links?: ILink[];
}

function App() {
  // const [inputValue, setInputValue] = useState<string>("");
  // const [dropdownValue, setDropdownValue] = useState(dropdownOptions[0]);
  const [photo, setPhoto] = useState<string>("");
  const [links, setLinks] = useState<ILink[]>([]);
  const [activeTab, setActiveTab] = useState<string>("links");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserData>();
  const [isRegisterShown, setIsRegisterShown] = useState<boolean>(true);

  const handleRemoveLink = (id: string) => {
    console.log("id:", id);
    const newLinks = links.filter((link) => link.id !== id);
    console.log(links, newLinks);
    setLinks(newLinks);
  };

  const handleChangeLink = (id: string, newLink: ILink) => {
    const newLinks = links.map((link) => {
      if (link.id === id) {
        return newLink;
      }
      return link;
    });
    setLinks(newLinks);
  };

  const handleAddNewLink = () => {
    const newLink = {
      link: "",
      icon: "github",
      id: nanoid(),
    };
    const newLinks = [...links, newLink];
    setLinks(newLinks);
  };

  const saveLinksToLocalStorage = () => {
    localStorage.setItem("links", JSON.stringify(links));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(undefined);
  };

  useEffect(() => {
    const localPhoto = localStorage.getItem("photo");
    const localLinks = localStorage.getItem("links");
    // console.log("localPhoto:", localPhoto);
    if (localPhoto && Object.keys(localPhoto).length > 0) {
      setPhoto(localPhoto);
    }

    if (localLinks && Object.keys(localLinks).length > 0) {
      setLinks(JSON.parse(localLinks));
    }
  }, []);

  if (isRegisterShown) {
    return (
      <div className="App App__form">
        <RegisterPage setIsRegisterShown={setIsRegisterShown} />
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="App App__form">
        <LoginPage
          setIsLoggedIn={setIsLoggedIn}
          setUserData={setUserData}
          setIsRegisterShown={setIsRegisterShown}
        />
      </div>
    );
  }

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
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="app-main">
        <LinkComponent
          profileImage={photo}
          name="Jakub Raczkiewicz"
          email="intermaqu@gmail.com"
          links={links}
        />
        {activeTab === "links" && (
          <CustomizeLinksComponent
            links={links}
            handleRemoveLink={handleRemoveLink}
            handleChangeLink={handleChangeLink}
            handleAddNewLink={handleAddNewLink}
            saveLinksToLocalStorage={saveLinksToLocalStorage}
          />
        )}
        {activeTab === "profile" && (
          <ProfileDetails handleLogout={handleLogout} />
        )}
      </main>
    </div>
  );
}

export default App;
