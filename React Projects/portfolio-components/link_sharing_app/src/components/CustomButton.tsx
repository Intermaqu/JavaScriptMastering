import React from "react";
import "../style/buttons.css";

interface IProps {
  isDisabled?: boolean;
  type?: "primary" | "secondary";
  text: string;
  onClick: () => void;
  width?: string;
  customStyles?: React.CSSProperties;
}

const CustomButton = ({
  isDisabled = false,
  type = "primary",
  text,
  onClick,
  width = "100%",
  customStyles = {},
}: IProps) => {
  let classes =
    type === "primary"
      ? "custom-button primary"
      : type === "secondary"
      ? "custom-button secondary"
      : "custom-button wrong-type";

  if (isDisabled) classes += " disabled";

  return (
    <button
      className={classes}
      style={{ width: width, ...customStyles }}
      onClick={() => onClick()}
      disabled={isDisabled}
    >
      <p className="headingS">{text}</p>
    </button>
  );
};

export default CustomButton;
