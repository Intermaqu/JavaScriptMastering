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
    top: 0;
    width: 45rem;
    left: ${isOpen ? 0 : "-45rem"};
    height: 100vh;
    padding: 3.75rem 3rem 2rem;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    background-color: ${theme === "light" ? "#fff" : colors["12"]};
`)

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
`