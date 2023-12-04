import React, { useContext } from "react";
import { useTheme } from "../../ThemeContext";
import { DefaultInput, DefaultInputLabel, DefaultInputWrapper } from "./Inputs";

type Props = {
  label?: string;
  value: string | number;
  onChange: (value: string, name: string) => void;
  name: string;
  width?: string;
  small?: boolean;
};

const CustomInput = ({ label, value, onChange, name, width = "100%", small}: Props) => {
  const { theme } = useTheme();
  const themeType = theme.type;
  const [inputValue, setInputValue] = React.useState(value);

  const handleChange = (value: string) => {
    setInputValue(value);
    onChange(value, name);
  };

  return (
    <DefaultInputWrapper theme={themeType} width={width}>
      {label && <DefaultInputLabel theme={themeType}>{label}</DefaultInputLabel>}
      <DefaultInput
        theme={themeType}
        value={inputValue}
        small={small}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
      />
    </DefaultInputWrapper>
  );
};

export default CustomInput;
