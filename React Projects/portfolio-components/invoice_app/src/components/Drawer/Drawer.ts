import styled from "styled-components";
import { ThemeType } from "../../themes/themeType";
import colors from "../../themes/Colors.json"

interface OverlayProps {
    isOpen: Boolean
}

interface DrawerProps extends OverlayProps {
    theme: ThemeType
}

interface DrawerSectionSCProps {
    width?: string
    flexDirection?: string
    // customStyles?: {
    //     [key: string]: string | number
    // }
    customStyles?: string
}

interface DrawerButtonsWrapperSC{
    isScrollable: boolean
}

export const OverlaySC = styled.div.attrs<OverlayProps>(({ isOpen }) => ({
    style: {
      opacity: isOpen ? 1 : 0,
      zIndex: isOpen ? 100 : -1,
    },
  }))<OverlayProps>`
  position: fixed;
  top: 0; 
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
`;

export const DrawerWrapperSC = styled.aside.attrs<DrawerProps>(({isOpen, theme})=>({
    style: {
        backgroundColor: theme === "light" ? "#fff" : colors["12"],
        left: isOpen ? "0rem" : "-45rem",
    }
}))<DrawerProps>`
    position: fixed;
    border-radius: 0 1.5rem 1.5rem 0;
    box-sizing: border-box;
    top: 0;
    width: 45rem;
    transition-property: left;
    transition: 0.5s ease-in-out; 
    height: 100vh;
    padding: 3.75rem 2.5rem 2rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
    // linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.10) 100%);


export const DrawerScrollableSectionSC = styled.section`
    flex-direction: column;
    display: flex;
    gap: 3rem;
    width: 100%;
    overflow-y: auto;
    align-items: flex-end;
    padding-right: 0.5rem;
    position: relative;

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

export const DrawerSectionSC = styled.section<DrawerSectionSCProps>(({width = "31.5rem", flexDirection = "column", customStyles})=>`
    display: flex;
    gap: 1.5rem;
    ${flexDirection? `flex-direction: ${flexDirection};` : ``}
    ${width? `width: ${width};` : ``}
    ${customStyles? customStyles : ``}    
`)


export const DrawerMultiRow = styled.div`
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

export const DrawerButtonsWrapperSC = styled.div<DrawerButtonsWrapperSC>(({isScrollable})=>`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 2rem;
    gap: 0.5rem;
    border-radius: 0 1.25rem 1.25rem 0;

    ${isScrollable ? `
        box-shadow: 0px 5rem 0px 0.25rem ${colors["05"]};
    ` : ``}
`)

export const DrawerImageSC = styled.img`
    padding: 1.125rem 0;
    width: 100%;
    cursor: pointer;
`