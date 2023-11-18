import React from "react";
import { handleIcon } from "../utils/handleIcon";
import CustomButton from "./CustomButton";
import "../style/header.css";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setIsPreviewShown: (value: boolean) => void;
};

const MobileHeader = ({
  activeTab,
  setActiveTab,
  setIsPreviewShown,
}: Props) => {
  return (
    <header>
      <img src={handleIcon("smallLogo")} alt="DevLinks Logo" />
      <div className="header-buttons-container">
        <div
          className={`mobile-header-tab-container ${
            activeTab === "links" && "header-tab-container-active"
          }`}
          onClick={() => setActiveTab("links")}
        >
          <img src={handleIcon("links")} alt="Links" />
        </div>
        <div
          className={`mobile-header-tab-container ${
            activeTab === "profile" && "header-tab-container-active"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          <img src={handleIcon("profile")} alt="Profile" />
        </div>
      </div>
      <div
        className="preview-page-header-button"
        onClick={() => setIsPreviewShown(true)}
      >
        <img src={handleIcon("eye")} alt="Profile" />
      </div>
    </header>
  );
};

export default MobileHeader;
