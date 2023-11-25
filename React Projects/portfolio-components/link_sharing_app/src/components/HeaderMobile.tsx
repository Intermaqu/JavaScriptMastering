import React from "react";
import { handleIcon } from "../utils/handleIcon";
import CustomButton from "./CustomButton";
import "../style/header.css";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setIsPreviewShown: (value: boolean) => void;
};

const HeaderMobile = ({ activeTab, setActiveTab, setIsPreviewShown }: Props) => {
  return (
    <header>
      <img src={handleIcon("smallLogo")} alt="DevLinks Logo" />
      <div className="header-buttons-container">
        <div
          className={`header-tab-container ${
            activeTab === "links" && "header-tab-container-active"
          }`}
          onClick={() => setActiveTab("links")}
        >
          <img src={handleIcon("links")} alt="Links" />
          <p className="headingS"></p>
        </div>
        <div
          className={`header-tab-container ${
            activeTab === "profile" && "header-tab-container-active"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          <img src={handleIcon("profile")} alt="Profile" />
          <p className="headingS"></p>
        </div>
      </div>
      <div className="preview-button-header">
        <img src={handleIcon("eye")} alt="preview button in header view"/>
      </div>
    </header>
  );
};

export default HeaderMobile;
