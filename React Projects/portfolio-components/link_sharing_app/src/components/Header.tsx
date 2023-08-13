import React from "react";
import { handleIcon } from "../utils/handleIcon";
import CustomButton from "./CustomButton";
import "../style/header.css";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Header = ({ activeTab, setActiveTab }: Props) => {
  return (
    <header>
      <img src={handleIcon("largeLogo")} alt="DevLinks Logo" />
      <div className="header-buttons-container">
        <div
          className={`header-tab-container ${
            activeTab === "links" && "header-tab-container-active"
          }`}
          onClick={() => setActiveTab("links")}
        >
          <img src={handleIcon("links")} alt="Links" />
          <p className="headingS">Links</p>
        </div>
        <div
          className={`header-tab-container ${
            activeTab === "profile" && "header-tab-container-active"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          <img src={handleIcon("profile")} alt="Profile" />
          <p className="headingS">Profile</p>
        </div>
      </div>
      <CustomButton
        type="secondary"
        text="Preview"
        width="fit-content"
        onClick={() => console.log("Preview clicked")}
      />
    </header>
  );
};

export default Header;
