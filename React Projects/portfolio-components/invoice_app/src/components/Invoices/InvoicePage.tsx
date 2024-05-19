import React from "react";
import {
  InvoiceRow,
  InvoiceStatus,
  InvoicesContainer,
  PageContent,
  PageHeader,
  PageTitleContainer,
  PageWrapper,
  InvoiceStatusDot,
} from "./Invoice";
import {
  BodyText,
  BodyTextVariant,
  HeadingL,
  HeadingM,
  HeadingS,
  HeadingSVariant,
} from "../Texts/Typography";
import COLORS from "../../themes/Colors.json";
import { ButtonDot, ButtonDotPlus } from "../Buttons/Buttons";
import CustomButton from "../Buttons/CustomButton";
import arrowDown from "../../assets/images/icon-arrow-down.svg";
import arrowRight from "../../assets/images/icon-arrow-right.svg";
import { STATUS_COLORS } from "./Invoice";

type Props = {};

const InvoicePage = (props: Props) => {
  return (
    <PageWrapper>
      <PageContent>
        <PageHeader>
          <PageTitleContainer>
            <HeadingL margin="0">Invoice</HeadingL>
            <BodyText color={COLORS["06"]}>There are 7 total Invoices</BodyText>
          </PageTitleContainer>
          <HeadingSVariant
            margin="0"
            cursor="pointer"
            onClick={() => {
              console.log("Filter Clicked");
            }}
          >
            Filter
            <img
              src={arrowDown}
              alt="arrow-down"
              style={{
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
          </HeadingSVariant>
          <CustomButton
            type="primary"
            onClick={() => {}}
            text="New Invoice"
            customStyles="margin-left: 40px;"
          />
        </PageHeader>
        <InvoicesContainer>
          <InvoiceRow backgroundColor={"#fff"}>
            <HeadingS margin="0">
              <span
                style={{
                  color: COLORS["07"],
                }}
              >
                #
              </span>
              RT3030
            </HeadingS>
            <BodyText color={COLORS["06"]}>Due 20 Jan 2021</BodyText>
            <BodyText color={COLORS["06"]}>Jensen Huang</BodyText>
            <HeadingS margin="0">£ 1,800.90</HeadingS>
            <InvoiceStatus status="pending">
              <InvoiceStatusDot status="pending" />
              <HeadingSVariant color={STATUS_COLORS["pending"]} margin="0">
                Pending
              </HeadingSVariant>
            </InvoiceStatus>
            <img src={arrowRight} alt="arrow-right" />
          </InvoiceRow>
        </InvoicesContainer>
      </PageContent>
    </PageWrapper>
  );
};

export default InvoicePage;
