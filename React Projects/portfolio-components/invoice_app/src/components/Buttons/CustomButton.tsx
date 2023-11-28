import React from "react";
import { useTheme } from "../../ThemeContext";
import { HeadingSVariant } from "../Texts/Typography";
import {
  Button1,
  Button2,
  Button3,
  Button4,
  Button5,
  Button6,
  ButtonDot,
  ButtonDotPlus,
} from "./Buttons";

type Props = {
  type: "primary" | "secondary" | "edit" | "save" | "delete" | "add";
  text: string;
  onClick: () => void;
};

const CustomButton = ({ type, text, onClick }: Props) => {
  const { theme } = useTheme();
  const themeType = theme.type;

  if (type === "primary") {
    return (
      <Button1 onClick={() => onClick()}>
        <ButtonDot>
          <ButtonDotPlus />
        </ButtonDot>
        <HeadingSVariant>{text}</HeadingSVariant>
      </Button1>
    );
  }

  if (type === "secondary") {
    return (
      <Button2 onClick={() => onClick()}>
        <HeadingSVariant>{text}</HeadingSVariant>
      </Button2>
    );
  }

  if (type === "edit") {
    return (
      <Button3 theme={themeType} onClick={() => onClick()}>
        <HeadingSVariant>{text}</HeadingSVariant>
      </Button3>
    );
  }

  if (type === "save") {
    return (
      <Button4 theme={themeType} onClick={() => onClick()}>
        <HeadingSVariant>{text}</HeadingSVariant>
      </Button4>
    );
  }

  if (type === "delete") {
    return (
      <Button5 onClick={() => onClick()}>
        <HeadingSVariant>{text}</HeadingSVariant>
      </Button5>
    );
  }

  if (type === "add") {
    return (
      <Button6 onClick={() => onClick()}>
        <HeadingSVariant>{`+ ${text}`}</HeadingSVariant>
      </Button6>
    );
  }

  return <></>;
};

export default CustomButton;
