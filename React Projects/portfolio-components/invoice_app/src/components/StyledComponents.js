import { styled } from "styled-components";
// import light from "../themes/LightTheme.json";
// import typografy from "../themes/Typografy.json";
// import colors from "../themes/Colors.json";

export const DefaultButton = styled.button`
    height: 48px;
    border-radius: 24px;
    padding: 18px 24px 15px;
    border: none;
    width: ${(props) => (props.width ? props.width : "auto")};
`;
// width: ${props.width ? props.width : "auto"};

export const StyledButton2 = styled(DefaultButton)`
    background-color: red;
    color: #fff;

    &:hover {
        background-color: blue;
        color: #fff;
    }
`;

export const StyledButton3 = styled.button``;
