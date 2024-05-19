import { styled } from "styled-components";
import { BodyTextVariant } from "../Texts/Typography";

//CONSTANTS
const PAGE_CONTENT_MAX_WIDTH = "1000px"

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
`

export const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: ${PAGE_CONTENT_MAX_WIDTH};
    min-height: 100vh;
    padding-top: 64px;
`

export const PageHeader = styled.div`
    width: 100%;
    height: 55px;
    margin-bottom: 64px;
    display: flex; 
    align-items: center;
`

export const PageTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 6px;
    margin-right: auto;
`

export const InvoicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`

export const InvoiceRow = styled.div<{backgroundColor: string}>`
    display: grid;
    grid-template-columns: 100px 200px 250px 150px 150px 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    gap: 16px;
    align-items: center;
    padding: 26px;
    border-radius: 8px;
    ${props => `background-color: ${props.backgroundColor};`}
`

export const STATUS_COLORS = {
    "pending": "#FF8F00",
    "paid": "#33D69F",
    "draft": "#373B53",
}

const STATUS_BACKGROUND_COLORS = {
    "pending": "#FF8F000F",
    "paid": "#33D69F0F",
    "draft": "#373B530F",
}


export const InvoiceStatus = styled.div<{status: "pending" | "paid" | "draft"}>`
    width: 104px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    gap: 8px;
    background-color: ${props => STATUS_BACKGROUND_COLORS[props.status]};
`

export const InvoiceStatusDot = styled.div<{status: "pending" | "paid" | "draft"}>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => STATUS_COLORS[props.status]};
`