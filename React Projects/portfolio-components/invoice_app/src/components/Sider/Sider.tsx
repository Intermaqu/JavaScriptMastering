import React from "react";
import { handleImage } from "../../utils";
import {
  SiderImage,
  SiderImageWrapper,
  SiderLogo,
  SiderLogoWrapper,
  SiderThemeToggler,
  SiderThemeTogglerWrapper,
  SiderWrapper,
} from "./SiderStyledComponents";
import { useTheme } from "../../ThemeContext";

type Props = {};

const Sider = (props: Props) => {
  const { theme, toggleTheme } = useTheme();
  const themeType = theme.type;

  return (
    <SiderWrapper>
      <SiderLogoWrapper>
        <SiderLogo src={handleImage("logo")} alt="logo" />
      </SiderLogoWrapper>
      <SiderThemeTogglerWrapper>
        <SiderThemeToggler src={handleImage( themeType === "light" ? "moon" : "sun")} alt="theme toggler icon" onClick={()=>{toggleTheme()}}/>
      </SiderThemeTogglerWrapper>
      <SiderImageWrapper>
        <SiderImage src={handleImage("avatar")} alt="avatar icon" />
      </SiderImageWrapper>
    </SiderWrapper>
  );
};

export default Sider;
