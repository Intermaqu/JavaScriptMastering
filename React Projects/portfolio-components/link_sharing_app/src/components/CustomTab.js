import React from "react";
import { handleIcon } from "../utils/handleIcon";
import "../style/tab.css";

const CustomTab = ({ text, icon, active, onClick }) => {
    return (
        <div
            className={`custom-tab-wrapper headingS ${
                active ? "custom-tab-wrapper-active" : ""
            }`}
        >
            <img
                src={handleIcon(icon)}
                alt="icon-ling"
                className="custom-tab-icon"
            />
            {text}
        </div>
    );
};

export default CustomTab;
