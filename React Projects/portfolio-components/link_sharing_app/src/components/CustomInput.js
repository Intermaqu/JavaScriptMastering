import React, { useRef, useState } from "react";
import "../style/inputs.css";
import iconLink from "../assets/images/icon-link.svg";

const CustomInput = ({
    value,
    onChangeValue,
    placeholder = "Name",
    width = "100%",
    type = "text",
    customStyles = {},
    isValid = true,
}) => {
    const inputRef = useRef(null);

    const [error, setError] = useState(!isValid);

    const handleClickParent = () => {
        inputRef.current && inputRef.current.focus();
    };

    const handleChange = (e) => {
        onChangeValue(e.target.value);
        if (e.target.value.length > 0) {
            setError(false);
        } else {
            setError(true);
        }
    };

    const className = `custom-input-wrapper ${
        error && "custom-input-wrapper-invalid"
    }`;

    return (
        <div
            className={className}
            style={{ width: width, ...customStyles }}
            onClick={handleClickParent}
        >
            <img src={iconLink} alt="icon-ling" className="custom-input-icon" />
            <input
                type={type}
                onChange={(e) => handleChange(e)}
                value={value}
                placeholder={placeholder}
                style={{ width: width }}
                className="custom-input-input bodyM"
                ref={inputRef}
            />
            {error && (
                <p className="custom-input-invalid-text bodyS">
                    Please check again
                </p>
            )}
        </div>
    );
};

export default CustomInput;
