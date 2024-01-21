import React from "react";
import { useTheme } from "../../ThemeContext";
import { HeadingSVariant } from "../Texts/Typography";
import buttonColors from "./ButtonColors";
import { ButtonDot, ButtonDotPlus, CustomButtonSC } from "./Buttons";

type Props = {
  type: "primary" | "secondary" | "edit" | "save" | "delete" | "add";
  text: string;
  onClick: () => void;
  width?: string;
  customStyles?: string;
  ref?: any;
};

const CustomButton = ({
  type,
  width,
  text,
  customStyles,
  onClick,
  ref,
}: Props) => {
  const { theme } = useTheme();
  const themeType = theme.type;

  if (type === "primary") {
    return (
      <CustomButtonSC
        theme={themeType}
        colors={buttonColors.primary}
        onClick={() => onClick()}
        width={width}
        customStyles={customStyles}
        ref={ref}
      >
        <ButtonDot>
          <ButtonDotPlus />
        </ButtonDot>
        <HeadingSVariant>{text}</HeadingSVariant>
      </CustomButtonSC>
    );
  }

  if (type === "secondary") {
    return (
      <CustomButtonSC
        colors={buttonColors.secondary}
        onClick={() => onClick()}
        theme={themeType}
        width={width}
        customStyles={customStyles}
      >
        <HeadingSVariant>{text}</HeadingSVariant>
      </CustomButtonSC>
    );
  }

  if (type === "edit") {
    return (
      <CustomButtonSC
        colors={buttonColors.edit}
        onClick={() => onClick()}
        theme={themeType}
        width={width}
        customStyles={customStyles}
      >
        <HeadingSVariant>{text}</HeadingSVariant>
      </CustomButtonSC>
    );
  }

  if (type === "save") {
    return (
      <CustomButtonSC
        colors={buttonColors.save}
        onClick={() => onClick()}
        theme={themeType}
        width={width}
        customStyles={customStyles}
      >
        <HeadingSVariant>{text}</HeadingSVariant>
      </CustomButtonSC>
    );
  }

  if (type === "delete") {
    return (
      <CustomButtonSC
        colors={buttonColors.delete}
        onClick={() => onClick()}
        theme={themeType}
        width={width}
        customStyles={customStyles}
      >
        <HeadingSVariant>{text}</HeadingSVariant>
      </CustomButtonSC>
    );
  }

  if (type === "add") {
    return (
      <CustomButtonSC
        colors={buttonColors.add}
        onClick={() => onClick()}
        theme={themeType}
        width={width}
        customStyles={customStyles}
      >
        <HeadingSVariant>+ {text}</HeadingSVariant>
      </CustomButtonSC>
    );
  }

  return <></>;
};

export default CustomButton;
