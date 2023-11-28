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

type Props = {};

const Sider = (props: Props) => {
  return (
    <SiderWrapper>
      <SiderLogoWrapper>
        <SiderLogo src={handleImage("logo")} alt="logo" />
      </SiderLogoWrapper>
      <SiderThemeTogglerWrapper>
        <SiderThemeToggler />
      </SiderThemeTogglerWrapper>
      <SiderImageWrapper>
        <SiderImage />
      </SiderImageWrapper>
    </SiderWrapper>
  );
};

export default Sider;
