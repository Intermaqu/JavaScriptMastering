import { styled } from "styled-components";
import colors from "../../themes/Colors.json"
import plus from "../../assets/images/icon-plus.svg"
import { ThemeType } from "../../themes/themeType";
import { ButtonColorsInterface } from "./ButtonColors";

export const DefaultButton = styled.button`
    border-radius: 1.5rem;
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    width: fit-content;
    color: #fff;
    cursor: pointer;
    user-select: none;
    outline: none;
    border: none;
    justify-content: center;
`

export const CustomButtonSC = styled(DefaultButton)<{theme?: ThemeType, width?: string, customStyles?: string, colors: ButtonColorsInterface}>(({ theme = "light", width, customStyles, colors = {} }) => `
    ${theme === "light" ? `
        background-color: ${colors.lightBackground};
        ${colors.lightColor ? `color: ${colors.lightColor};` : ""}

        &:hover {
            ${colors.lightHover ? `background-color: ${colors.lightHover};` : ""}
        }

        `: `
    
        ${colors.darkBackground ? `background-color: ${colors.darkBackground};` : `background-color: ${colors.lightBackground};`}
        ${colors.darkColor ? `color: ${colors.darkColor};` : `color: ${colors.lightColor};`}
    
        &:hover {
            ${colors.darkHover ?  `background-color: ${colors.darkHover};` : `background-color: ${colors.lightHover};`}
        }
    `}
    ${width ? `width: ${width}; ` : ""}
    ${colors.padding ? `padding: 0 1rem 0 0.5rem; ` : ""}
    ${customStyles}
    `)
    

export const ButtonDot = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const ButtonDotPlus = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${plus});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 0.75rem;
`
