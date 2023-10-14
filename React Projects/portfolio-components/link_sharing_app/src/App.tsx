import "./App.css";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
import "./style/general.css";
import { useState, useEffect, useLayoutEffect } from "react";
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
import PreviewPage from "./Pages/PreviewPage";

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
  links: ILink[];
}

function App() {
  // const [inputValue, setInputValue] = useState<string>("");
  // const [dropdownValue, setDropdownValue] = useState(dropdownOptions[0]);
  const [activeTab, setActiveTab] = useState<string>("links");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserData>();
  const [isPreviewShown, setIsPreviewShown] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRegisterShown, setIsRegisterShown] = useState<boolean>(true);
  const [display, setDisplay] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const appRef = React.useRef<HTMLDivElement>(null);

  const handleRemoveLink = (id: string) => {
    if (!userData) return;

    const newLinks = userData.links.filter((link) => link.id !== id);
    setUserData({ ...userData, links: newLinks });
  };

  const handleChangeLink = (id: string, newLink: ILink) => {
    const newLinks = userData!.links.map((link) => {
      if (link.id === id) {
        return newLink;
      }
      return link;
    });
    setUserData({ ...userData!, links: newLinks });
  };

  const handleAddNewLink = () => {
    if (!userData) return;

    const newLink = {
      link: "",
      icon: "github",
      id: nanoid(),
    };
    const newUserData = {
      ...userData,
      links: [...userData.links, newLink],
    };
    setUserData(newUserData);
  };

  const saveUserDataToLocalStorage = () => {
    if (!userData) return;
    localStorage.setItem(userData.email, JSON.stringify(userData));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(undefined);
  };

  const handleChangePhoto = (photo: string) => {
    if (!userData) return;
    setUserData({ ...userData, photo: photo });
  };

  const handleChangeUserData = (name: string, value: string) => {
    if (!userData) return;
    setUserData({ ...userData, [name]: value });
  };

  const handleTogglePreview = () => {
    setIsPreviewShown(!isPreviewShown);
  };

  const handleResize = () => {
    if (!appRef.current) return;
    const currentWidth = appRef.current?.clientWidth;
    setWindowWidth(currentWidth);
    if (currentWidth <= 650) {
      setDisplay("mobile");
      return;
    }
    if (currentWidth <= 1000) {
      setDisplay("tablet");
      return;
    }

    setDisplay("desktop");
    return;
  };

  useEffect(() => {
    const localUserLogin = localStorage.getItem("userLoggedIn");
    if (!localUserLogin || Object.keys(localUserLogin).length === 0) {
      setIsRegisterShown(false);
      setIsLoading(false);
      setIsLoggedIn(false);
      return;
    }
    const localUserData = localStorage.getItem(localUserLogin);
    if (localUserData && Object.keys(localUserData).length > 0) {
      setUserData(JSON.parse(localUserData));
      setIsLoggedIn(true);
      setIsRegisterShown(false);
      setIsLoading(false);
      return;
    }

    setIsLoggedIn(false);
    setIsRegisterShown(false);
    setIsLoading(false);
  }, []);

  useLayoutEffect(() => {
    const currentWidth = window.innerWidth;
    setWindowWidth(currentWidth);
    if (currentWidth <= 650) {
      setDisplay("mobile");
      return;
    }
    if (currentWidth <= 1050) {
      setDisplay("tablet");
      return;
    }

    setDisplay("desktop");
    return;
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // console.log(windowWidth);
    console.log(display);
  }, [windowWidth]);

  if (isLoading) {
    return (
      <div className="App" ref={appRef}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <p className="headingM">Loading...</p>
        </div>
      </div>
    );
  }

  if (isRegisterShown) {
    return (
      <div className="App App__form" ref={appRef}>
        <RegisterPage setIsRegisterShown={setIsRegisterShown} />
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="App App__form" ref={appRef}>
        <LoginPage
          setIsLoggedIn={setIsLoggedIn}
          setUserData={setUserData}
          setIsRegisterShown={setIsRegisterShown}
        />
      </div>
    );
  }

  if (isPreviewShown) {
    return (
      <div className="App App__no_padding" ref={appRef}>
        <PreviewPage
          email={userData?.email || ""}
          links={userData?.links || []}
          profileImage={userData?.photo || ""}
          name={userData?.name || ""}
          surname={userData?.surname || ""}
          handleClosePreview={setIsPreviewShown}
        />
      </div>
    );
  }

  return (
    <div className="App" ref={appRef}>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        togglePreview={handleTogglePreview}
      />
      <main className="app-main">
        <LinkComponent
          profileImage={userData?.photo}
          name={userData?.name}
          surname={userData?.surname}
          email={userData ? userData.email : ""}
          links={userData ? userData.links : []}
        />
        {activeTab === "links" && (
          <CustomizeLinksComponent
            links={userData ? userData.links : []}
            handleRemoveLink={handleRemoveLink}
            handleChangeLink={handleChangeLink}
            handleAddNewLink={handleAddNewLink}
            saveUserDataToLocalStorage={saveUserDataToLocalStorage}
          />
        )}
        {activeTab === "profile" && (
          <ProfileDetails
            photo={userData ? userData.photo : ""}
            handleLogout={handleLogout}
            email={userData ? userData.email : ""}
            name={userData ? userData.name : ""}
            surname={userData ? userData.surname : ""}
            handleChangeUserData={handleChangeUserData}
            handleChangePhoto={handleChangePhoto}
            saveUserDataToLocalStorage={saveUserDataToLocalStorage}
          />
        )}
      </main>
    </div>
  );
}

export default App;
