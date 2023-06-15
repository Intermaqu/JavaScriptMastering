import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";
import "../style/checkboxes.css";

const CustomCheckbox = ({ text, checked, onClickCheck, width }) => {
    const theme = useContext(ThemeContext);

    const classNames = `custom-checkbox custom-checkbox-${
        checked ? "checked" : "unchecked"
    }-${theme}`;

    return (
        <div
            onClick={() => onClickCheck()}
            className={classNames}
            style={{ width: width || "fit-content" }}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={() => onClickCheck()}
            />
            <p>{text}</p>
        </div>
    );
};

export default CustomCheckbox;
