import React from "react";
import "../styles/FormInput.css"


const FormInput = ({name, value, setValue, valid=true, message}) => {


  return (
    <div className="form-input">
      <span className="form-input__label">{name}</span>
      <input
        className="form-input__input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <span
        className={valid ? "valid-input" : "invalid-input"}
      >{message}</span>
    </div>
  );
};

export default FormInput;
