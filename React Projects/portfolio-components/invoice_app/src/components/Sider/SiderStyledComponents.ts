import styled from "styled-components";
import colors from "../../themes/Colors.json"

export const SiderWrapper = styled.div<{theme: string}>(({theme}) =>`
    display: flex;
    width: 6.4375rem;
    position: relative;
    top: 0;
    left: 0;
    z-index: 101;
    height: 100%;
    flex-direction: column;
    border-radius: 0 1.25rem 1.25rem 0;
    background-color: ${theme === "light" ? colors["14"] : colors["03"]};
    `)
    
export const SiderLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 0 1.25rem 1.25rem 0;
    background-color: ${colors["01"]};
    position: relative;
    overflow: hidden;
    margin-bottom: auto;

    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 50%;
        background-color: ${colors["02"]};
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 1.25rem 0;
        z-index: 1;
    }
`

export const SiderLogo = styled.img`
    width: 2.5rem;
    position: relative;
    z-index: 2;
`

export const SiderThemeTogglerWrapper = styled.div``

export const SiderThemeToggler = styled.img``

export const SiderImageWrapper = styled.div``

export const SiderImage = styled.img``
