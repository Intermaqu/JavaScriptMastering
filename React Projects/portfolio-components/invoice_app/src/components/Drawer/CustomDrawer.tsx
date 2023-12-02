import React from "react";
import { useTheme } from "../../ThemeContext";
import { DrawerWrapperSC, OverlaySC } from "./Drawer";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CustomDrawer = ({ isOpen, onClose }: Props) => {
  const { theme } = useTheme();
  const themeType = theme.type;

  return (
    <OverlaySC isOpen={isOpen} onClick={() => onClose()}>
      <DrawerWrapperSC isOpen={isOpen} theme={themeType}></DrawerWrapperSC>
    </OverlaySC>
  );
};

export default CustomDrawer;
