import React, { useContext, useState } from "react";
import "../style/dropdowns.css";
import ThemeContext from "../ThemeContext";
import arrow from "../assets/images/down-arrow-purple.png";

const CustomDropdown = ({ value, setValue, options, width }) => {
    const [isOpen, setIsOpen] = useState(false);

    const theme = useContext(ThemeContext);

    return (
        <div
            className="custom-dropdown-wrapper"
            style={{ width: width }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div
                className={`custom-dropdown-content ${
                    isOpen && "custom-dropdown-content-opened"
                } custom-dropdown-content-${theme}`}
            >
                <p>{value}</p>
                <img
                    src={arrow}
                    className="dropdown-arrow"
                    alt="that is dropdown arrow"
                />
            </div>
            {isOpen && (
                <div
                    className={`custom-dropdown-options custom-dropdown-options-${theme}`}
                >
                    {options.map(({ id, name }) => (
                        <span
                            className="custom-dropdown-option"
                            onClick={() => {
                                setValue(name);
                                setIsOpen(false);
                            }}
                            key={id}
                        >
                            {name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
