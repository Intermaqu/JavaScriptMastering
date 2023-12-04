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
import { DrawerWrapperSC, OverlaySC } from "./components/Drawer/Drawer";
import CustomDrawer from "./components/Drawer/CustomDrawer";

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
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);

  const consoleLog = () => {
    console.log("Clicked");
  };

  return (
    <AppElement theme={theme}>
      <GlobalStyles theme={theme} />
      <Sider />
      <CustomDrawer
        isOpen={overlayOpen}
        onClose={() => setOverlayOpen(false)}
      />
      <div>
        <CustomButton type="edit" text="Theme Toggler" onClick={toggleTheme} />
        <HeadingL>HeadingL</HeadingL>
        <HeadingM>HeadingM</HeadingM>
        <HeadingS>HeadingS</HeadingS>
        <BodyText>BodyText</BodyText>
        <BodyTextVariant>BodyTextVariant</BodyTextVariant>
        <DefaultText>DefaultText</DefaultText>
        <CustomButton type="primary" text="Mark as Paid" onClick={consoleLog} />
        <CustomButton
          type="secondary"
          text="Mark as Paid"
          onClick={consoleLog}
        />
        <CustomButton
          type="secondary"
          text="Open Overlay"
          onClick={() => setOverlayOpen(true)}
        />
        <CustomButton type="edit" text="Edit" onClick={consoleLog} />
        <CustomButton type="save" text="Save as Draft" onClick={consoleLog} />
        <CustomButton type="delete" text="Delete" onClick={consoleLog} />
        <CustomButton type="add" text="Add New Item" onClick={consoleLog} />
        {/* <CustomInput label="Name" value={inputValue} onChange={setInputValue} /> */}
      </div>
    </AppElement>
  );
}

export default App;
