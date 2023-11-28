import { styled } from "styled-components";
import colors from "../../themes/Colors.json"

interface DefaultInputInterface{
    theme: string;
    width?: string;
}

export const DefaultInput = styled.input<DefaultInputInterface>(({theme}) => `
    padding: 1.12rem 1.25rem;   
    border: 1px solid ${theme === "light" ? colors["05"] : colors["04"]};
    border-radius: 0.5rem;
    width: min(100%, 15rem);
    font-family: 'League Spartan',sans-serif;
    font-weight: 700;
    font-size: 0.9375rem;
    line-height: 0.9375rem;
    letter-spacing: -0.01563rem;
    color: ${theme === "light" ? "#000" : "#fff"};
    background-color: ${theme === "light" ? "#fff" : colors["03"]};
    caret-color: ${colors["01"]};
    
    &:focus{
        outline: none;
        border: 1px solid ${theme === "light" ? colors["02"] : colors["04"]};
    }
`)

export const DefaultInputLabel = styled.label<DefaultInputInterface>(({theme}) => `
    font-family: 'League Spartan',sans-serif;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 0.9375rem;
    letter-spacing: -0.00625rem;
    color: ${theme === "light" ? colors["07"] : colors["05"]};
`)


export const DefaultInputWrapper = styled.div<DefaultInputInterface>(({width}) => `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.56rem;
    width: ${width ? width : "15rem"};
`)