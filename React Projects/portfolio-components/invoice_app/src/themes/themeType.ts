import colors from "./Colors.json"

export const lightTheme: ThemeTypeContext = {
    type: "light",
    colorPrimary: "#000",
    colorSecondary: colors["06"],
    backgroundPrimary: colors["11"],
    backgroundSecondary: "#fff",
}

export const darkTheme: ThemeTypeContext = {
    type: "dark",
    colorPrimary: "#FFF",
    colorSecondary: colors["05"],
    backgroundPrimary: colors["12"],
    backgroundSecondary: colors["03"],
}

export type ThemeType = "light" | "dark";

export interface ThemeTypeContext {
    type: ThemeType;
    colorPrimary: string;
    colorSecondary: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
}
  
