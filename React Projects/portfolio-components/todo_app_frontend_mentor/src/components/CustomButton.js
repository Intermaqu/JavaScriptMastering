import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";
import "../style/buttons.css";

const CustomButton = ({ name, type, callback, width }) => {
    const theme = useContext(ThemeContext);

    const types = {
        PrimaryL: "button-primary-l",
        PrimaryS: "button-primary-s",
        Secondary: "button-secondary",
        Destructive: "button-destructive",
    };
    const buttonType = types[type] || types["PrimaryL"];
    const style = theme === "light" ? buttonType : `${buttonType}-dark`;

    return (
        <button
            onClick={() => callback()}
            className={style}
            style={{ width: width || "fit-content" }}
        >
            {name}
        </button>
    );
};

export default CustomButton;
