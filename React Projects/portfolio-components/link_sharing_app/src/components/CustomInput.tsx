import React, { useRef, useState, useEffect } from "react";
import "../style/inputs.css";
import { handleIcon } from "../utils/handleIcon";

const CustomInput = ({
  value,
  onChangeValue,
  placeholder = "Name",
  width = "100%",
  type = "text",
  customStyles = {},
  isValid = true,
  name,
  icon,
  errorMessage = "Please check again",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<boolean>(!isValid);
  const [currentError, setCurrentError] = useState<string>("");
  const handleClickParent = () => {
    inputRef.current && inputRef.current.focus();
  };

  const className = `custom-input-wrapper ${
    error && "custom-input-wrapper-invalid"
  }`;

  useEffect(() => {
    setError(!isValid);
  }, [isValid]);

  useEffect(() => {
    setCurrentError(errorMessage);
    console.log("error message", errorMessage);
  }, [errorMessage]);

  return (
    <div
      className={className}
      style={{ width: width, ...customStyles }}
      onClick={handleClickParent}
    >
      <img
        src={handleIcon(icon)}
        alt="icon-ling"
        className="custom-input-icon"
      />
      <input
        type={type}
        onChange={(e) => onChangeValue(name, e.target.value)}
        value={value}
        placeholder={placeholder}
        style={{ width: width }}
        className="custom-input-input bodyM"
        ref={inputRef}
      />
      {error && (
        <p className="custom-input-invalid-text bodyS">{currentError}</p>
      )}
    </div>
  );
};

export default CustomInput;
