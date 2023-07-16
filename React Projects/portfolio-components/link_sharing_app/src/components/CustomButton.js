import React from "react";
import "../style/buttons.css";

const CustomButton = ({
    isActive = false,
    isDisabled = false,
    type = "primary",
    text,
    onClick,
    width = "100%",
    customStyles = {},
}) => {
    let classes =
        type === "primary"
            ? "custom-button primary"
            : type === "secondary"
            ? "custom-button secondary"
            : "custom-button wrong-type";

    console.log(classes);
    if (isDisabled) classes += " disabled";

    return (
        <button
            className={classes}
            style={{ width: width, ...customStyles }}
            onClick={onClick}
            disabled={isDisabled}
        >
            <p className="headingS">{text}</p>
        </button>
    );
};

export default CustomButton;
