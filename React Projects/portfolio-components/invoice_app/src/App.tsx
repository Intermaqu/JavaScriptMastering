import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import CustomButton from "./components/Buttons/CustomButton";
import CustomInput from "./components/Inputs/CustomInput";
import colors from "./themes/Colors.json";
import {
  DefaultInput,
  DefaultInputLabel,
  DefaultInputWrapper,
} from "./components/Inputs/Inputs";
import {
  BodyText,
  BodyTextVariant,
  DefaultText,
  HeadingL,
  HeadingM,
  HeadingS,
} from "./components/Texts/Typography";
import { GlobalStyles } from "./globalStyles";
import { useTheme } from "./ThemeContext";
import Sider from "./components/Sider/Sider";

const AppElement = styled.main(
  ({ theme }) => `
  width: 100%;
  height: 100%; 
  display: flex;
  
`
);

function App() {
  const { theme, toggleTheme } = useTheme();
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <AppElement theme={theme}>
      <GlobalStyles theme={theme} />
      <Sider />
      <div>
        <CustomButton type="edit" text="Theme Toggler" onClick={toggleTheme} />
        <HeadingL>HeadingL</HeadingL>
        <HeadingM>HeadingM</HeadingM>
        <HeadingS>HeadingS</HeadingS>
        <BodyText>BodyText</BodyText>
        <BodyTextVariant>BodyTextVariant</BodyTextVariant>
        <DefaultText>DefaultText</DefaultText>
        <CustomButton
          type="primary"
          text="Mark as Paid"
          onClick={() => console.log("Clicked")}
        />
        <CustomButton
          type="secondary"
          text="Mark as Paid"
          onClick={() => console.log("Clicked")}
        />
        <CustomButton
          type="edit"
          text="Edit"
          onClick={() => console.log("Clicked")}
        />
        <CustomButton
          type="save"
          text="Save as Draft"
          onClick={() => console.log("Clicked")}
        />
        <CustomButton
          type="delete"
          text="Delete"
          onClick={() => console.log("Clicked")}
        />
        <CustomButton
          type="add"
          text="Add New Item"
          onClick={() => console.log("Clicked")}
        />
        <CustomInput label="Name" value={inputValue} onChange={setInputValue} />
      </div>
    </AppElement>
  );
}

export default App;
