import { styled } from "styled-components";
import colors from "../../themes/Colors.json"
import plus from "../../assets/images/icon-plus.svg"
import ThemeInterface from "../../models/interfaces/themeInterface";

export const DefaultButton = styled.div`
    border-radius: 1.5rem;
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    width: fit-content;
    color: #fff;
    cursor: pointer;
    user-select: none;
`

export const Button2 = styled(DefaultButton)`
    background-color: ${colors["01"]};
    &:hover {
        background-color: ${colors["02"]};
    }
`
    
export const Button1 = styled(DefaultButton)`
    background-color: ${colors["01"]};
    padding: 0 1rem 0 0.5rem;
    &:hover {
        background-color: ${colors["02"]};
    }
`

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

export const Button3 = styled(DefaultButton)<ThemeInterface>(({ theme }) => `
    background-color:${theme === "light" ? colors["13"] : colors["04"]};
    color: ${theme === "light" ? colors["07"] : colors["05"]};
    
    &:hover {
        background-color: ${theme === "light" ? colors["05"] : "#fff"};
    }`
)

export const Button4 = styled(DefaultButton)<ThemeInterface>(({ theme }) => `
    background-color:${theme === "light" ? colors["14"] : colors["14"]};
    color: ${theme === "light" ? colors["06"] : colors["05"]};
    
    &:hover {
        background-color: ${theme === "light" ? colors["08"] : colors["03"]};
    }`
)

export const Button5 = styled(DefaultButton)`
    background-color: ${colors["09"]};
    
    &:hover {
        background-color: ${colors["10"]};
    }
`

export const Button6 = styled(DefaultButton)`
    background-color: ${colors["13"]};
    color: ${colors["07"]};


    &:hover {
        background-color: ${colors["05"]};
    }
    
`