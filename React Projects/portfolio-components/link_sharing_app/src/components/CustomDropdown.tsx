import React, { useState } from "react";
import "../style/dropdowns.css";
import arrowDown from "../assets/images/icon-chevron-down.svg";
import { handleIcon } from "../utils/handleIcon";
import { IOption } from "../Interfaces/link";

interface IProps {
  value: IOption;
  setValue: (option: IOption) => void;
  options: IOption[];
  width?: string;
}

const CustomDropdown = ({
  value,
  setValue,
  options,
  width = "100%",
}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="custom-dropdown-wrapper"
      style={{ width: width }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`custom-dropdown-content ${
          isOpen && "custom-dropdown-content-opened"
        }`}
      >
        <img
          src={handleIcon(value.icon)}
          alt="icon-ling"
          className="custom-input-icon"
        />
        <p>{value.name}</p>
        <img
          src={arrowDown}
          className={`dropdown-arrow`}
          alt="that is dropdown arrow"
        />
      </div>
      {isOpen && (
        <div className={`custom-dropdown-options`}>
          {options.map((option) => (
            <span
              className={`custom-dropdown-option bodyM ${
                value.id === option.id && "custom-dropdown-option-selected"
              }`}
              onClick={() => {
                setValue(option);
                setIsOpen(false);
              }}
              key={option.id}
            >
              <img src={handleIcon(option.icon)} alt="icon-ling" />
              {`${option.name} ${value.id === option.id ? "(Selected)" : ""}`}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
