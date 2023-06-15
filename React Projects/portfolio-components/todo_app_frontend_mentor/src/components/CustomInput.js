import React, { useContext, useEffect, useRef, useState } from "react";
import ThemeContext from "../ThemeContext";
import "../style/inputs.css";

const CustomInput = ({
    value,
    onChangeValue,
    placeholder = "Enter task name",
    width,
}) => {
    const theme = useContext(ThemeContext);
    const inputRef = useRef(null);

    const [error, setError] = useState(false);

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

    useEffect(() => {
        console.log(error);
    }, [error]);

    const className = `custom-input-wrapper custom-input-wrapper-${theme} ${
        error && "custom-input-wrapper-invalid"
    }`;

    return (
        <div
            className={className}
            style={{ width: width }}
            onClick={handleClickParent}
        >
            <input
                type="text"
                onChange={(e) => handleChange(e)}
                value={value}
                placeholder={placeholder}
                style={{ width: width }}
                className="custom-input-input"
                ref={inputRef}
            />
            {error && (
                <p className="custom-input-invalid-text">Can't be empty</p>
            )}
        </div>
    );
};

export default CustomInput;
