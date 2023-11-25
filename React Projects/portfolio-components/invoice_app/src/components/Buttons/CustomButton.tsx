import React from "react";
import { HeadingSVariant } from "../Typography";
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
  globalTheme?: "light" | "dark";
  text: string;
  onClick: () => void;
};

const CustomButton = ({ type, globalTheme, text, onClick }: Props) => {
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
      <Button3 theme={globalTheme || "light"} onClick={() => onClick()}>
        <HeadingSVariant>{text}</HeadingSVariant>
      </Button3>
    );
  }

  if (type === "save") {
    return (
      <Button4 theme={globalTheme || "light"} onClick={() => onClick()}>
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
