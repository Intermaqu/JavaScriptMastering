import React, { useContext } from "react";
import { useTheme } from "../../ThemeContext";
import { DefaultInput, DefaultInputLabel, DefaultInputWrapper } from "./Inputs";

type Props = {
  label: string;
  value: string;
  onChange: (e: string) => void;
};

const CustomInput = ({ label, value, onChange }: Props) => {
  const { theme } = useTheme();
  const themeType = theme.type;

  return (
    <DefaultInputWrapper theme={themeType}>
      <DefaultInputLabel theme={themeType}>{label}</DefaultInputLabel>
      <DefaultInput
        theme={themeType}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </DefaultInputWrapper>
  );
};

export default CustomInput;
