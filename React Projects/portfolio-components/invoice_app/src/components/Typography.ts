import { styled } from "styled-components";

export const DefaultText = styled.p`
    font-family: 'League Spartan', sans-serif;
    font-size: 16px;
`

export const DefaultHeader = styled(DefaultText)`
    font-weight: 700;
`

export const DefaultBodyText = styled(DefaultText)`
    font-weight: 500;
`

export const HeadingL = styled(DefaultHeader)`
    font-size: 2.25rem;
    line-height: 2.0625rem;
    letter-spacing: -1px;
`

export const HeadingM = styled(DefaultHeader)`
    font-size: 1.5rem;
    line-height: 1.375rem;
    letter-spacing: -0.75px;
`

export const HeadingS = styled(DefaultHeader)`
    font-size: 0.9375rem;
    line-height: 1.5rem;
    letter-spacing: -0.25px;
`

export const HeadingSVariant = styled(DefaultHeader)`
    font-size: 0.9375rem;
    line-height: 0.9375rem;
    letter-spacing: -0.25px;
`

export const BodyText = styled(DefaultBodyText)`
    font-size: 0.8125rem;
    line-height: 1.125rem;
    letter-spacing: -0.1px;
`  

export const BodyTextVariant = styled(DefaultBodyText)`
    font-size: 0.8125rem;
    line-height: 0.9375rem;
    letter-spacing: -0.25px;
`  


