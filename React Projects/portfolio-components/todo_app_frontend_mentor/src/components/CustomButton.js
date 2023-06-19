import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";
import "../style/buttons.css";

const CustomButton = ({
    text,
    type,
    callback,
    width,
    plus = false,
    customStyles = {},
}) => {
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
            onClick={callback}
            className={style}
            style={{ width: width || "fit-content", ...customStyles }}
        >
            {plus ? `+ ${text}` : text}
        </button>
    );
};

export default CustomButton;
