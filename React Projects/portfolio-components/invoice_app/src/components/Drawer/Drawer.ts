import styled from "styled-components";
import { ThemeType } from "../../themes/themeType";
import colors from "../../themes/Colors.json"


export const OverlaySC = styled.div<{isOpen: Boolean}>(({isOpen})=>`
    position: fixed;
    top: 0; 
    left: 0;
    z-index: ${isOpen ? 100 : -1};
    opacity: ${isOpen ? 1 : 0};
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
`)

export const DrawerWrapperSC = styled.aside<{isOpen: Boolean, theme: ThemeType}>(({isOpen, theme})=>`
    position: fixed;
    border-radius: 0 1.5rem 1.5rem 0;
    box-sizing: border-box;
    top: 0;
    width: 45rem;
    left: ${isOpen ? "0rem" : "-45rem"};
    transition: 0.5s ease-in-out all; 
    height: 100vh;
    padding: 3.75rem 3rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: ${theme === "light" ? "#fff" : colors["12"]};
`)
    
export const DrawerScrollableSectionSC = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    overflow-y: auto;
    align-items: flex-end;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${colors["05"]};
        border-radius: 0.25rem;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${colors["06"]};
    }
`

export const DrawerSectionSC = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 31.5rem;
`

export const DrawerMultiRow = styled.section`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    width: 100%;
`

export const DrawerTableGrid = styled.div`
    display: grid;
    grid-template-columns: 13.375rem 2.875rem 6.25rem 4rem 0.8rem;
    width: 100%;   
    grid-gap: 1rem;
`

export const DrawerTableGridRow = styled.div`
    display: grid;
    grid-template-columns: 13.375rem 2.875rem 6.25rem 4rem 0.8rem;
    width: 100%;   
    gap: 0.5rem;
`

export const DrawerButtonsWrapperSC = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 2rem;
    gap: 0.5rem;
    border-radius: 0 1.25rem 1.25rem 0;
`