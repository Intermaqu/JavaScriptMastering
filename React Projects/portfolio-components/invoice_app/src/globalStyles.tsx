import { createGlobalStyle } from "styled-components";
import { ThemeTypeContext } from "./themes/themeType";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeTypeContext }>(
  ({ theme }) => `
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        color: ${theme.colorPrimary};
        background-color: ${theme.backgroundPrimary};
    }
`
);
