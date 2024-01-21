import React, { useEffect, useState } from "react";
import { useTheme } from "../../ThemeContext";
import {
  DrawerImageSC,
  DrawerMultiRow,
  DrawerScrollableSectionSC,
  DrawerSectionSC,
  DrawerTableGrid,
  DrawerWrapperSC,
  OverlaySC,
} from "./Drawer";
import {
  BodyText,
  HeadingM,
  HeadingS,
  HeadingSVariant,
} from "../Texts/Typography";
import colors from "../../themes/Colors.json";
import CustomInput from "../Inputs/CustomInput";
import { InvoiceInterface, emptyInvoiceData } from "./invoiceModel";
import { DefaultInputLabel } from "../Inputs/Inputs";
import CustomButton from "../Buttons/CustomButton";
import { nanoid } from "nanoid";
import { handleImage } from "../../utils";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  invoiceData?: InvoiceInterface;
};

const CustomDrawer = ({ isOpen, onClose, invoiceData }: Props) => {
  const [localInvoiceData, setLocalInvoiceData] = useState(
    invoiceData || emptyInvoiceData
  );
  const [isScrollable, setIsScrollable] = useState<Boolean>(false);
  const { theme } = useTheme();
  const themeType = theme.type;

  const bottomRef = React.useRef<HTMLDivElement>(null);
  const scrollableRef = React.useRef<HTMLDivElement>(null);

  const handleChangeInvoiceData = (value: string, name: string) => {
    setLocalInvoiceData({ ...localInvoiceData, [name]: value });
  };

  const handleChangeInvoiceDataItem = (
    value: string,
    name: string,
    id: string
  ) => {
    if (name === "price" && parseFloat(value) < 0) {
      console.log("Price", value);
    }

    const newItems = localInvoiceData.items.map((item) =>
      id === item.id ? { ...item, [name]: value } : item
    );
    setLocalInvoiceData({ ...localInvoiceData, items: newItems });
  };

  const handleAddItem = () => {
    setLocalInvoiceData({
      ...localInvoiceData,
      items: [
        ...localInvoiceData.items,
        { name: "", quantity: 0, price: 0, id: nanoid() },
      ],
    });

    setTimeout(() => {
      if (bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 1);

    if (scrollableRef.current) {
      const { scrollHeight, clientHeight } = scrollableRef.current;
      setIsScrollable(scrollHeight > clientHeight);
    }
  };

  useEffect(() => {
    if (scrollableRef.current) {
      const { scrollHeight, clientHeight } = scrollableRef.current;
      setIsScrollable(scrollHeight > clientHeight);
    }
  }, []);

  useEffect(() => {
    console.log(`isScrollable: ${isScrollable}`);
  }, [isScrollable]);

  return (
    <OverlaySC isOpen={isOpen} onClick={() => onClose()}>
      <DrawerWrapperSC
        isOpen={isOpen}
        theme={themeType}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DrawerSectionSC width="32.5rem">
          <HeadingM>New Invoice</HeadingM>
        </DrawerSectionSC>
        <DrawerScrollableSectionSC ref={scrollableRef}>
          <DrawerSectionSC>
            <HeadingS color={colors["01"]}>Bill From</HeadingS>
            <CustomInput
              label="Street Address"
              value={localInvoiceData.streetAddress}
              onChange={handleChangeInvoiceData}
              name="streetAddress"
            />
            <DrawerMultiRow>
              <CustomInput
                label="City"
                value={localInvoiceData.city}
                onChange={handleChangeInvoiceData}
                name="city"
              />
              <CustomInput
                label="Post Code"
                value={localInvoiceData.postCode}
                onChange={handleChangeInvoiceData}
                name="postCode"
              />
              <CustomInput
                label="Country"
                value={localInvoiceData.country}
                onChange={handleChangeInvoiceData}
                name="country"
              />
            </DrawerMultiRow>
          </DrawerSectionSC>
          <DrawerSectionSC>
            <HeadingS color={colors["01"]}>Bill To</HeadingS>
            <CustomInput
              label="Client's Name"
              value={localInvoiceData.clientName}
              onChange={handleChangeInvoiceData}
              name="clientName"
            />
            <CustomInput
              label="Client's Email"
              value={localInvoiceData.clientEmail}
              onChange={handleChangeInvoiceData}
              name="clientEmail"
            />
            <CustomInput
              label="Client's Street Address"
              value={localInvoiceData.clientStreetAddress}
              onChange={handleChangeInvoiceData}
              name="clientStreetAddress"
            />
            <DrawerMultiRow>
              <CustomInput
                label="City"
                value={localInvoiceData.clientCity}
                onChange={handleChangeInvoiceData}
                name="clientCity"
              />
              <CustomInput
                label="Post Code"
                value={localInvoiceData.clientPostCode}
                onChange={handleChangeInvoiceData}
                name="clientPostCode"
              />
              <CustomInput
                label="Country"
                value={localInvoiceData.clientCountry}
                onChange={handleChangeInvoiceData}
                name="clientCountry"
              />
            </DrawerMultiRow>
            <DrawerMultiRow>
              <CustomInput
                label="Invoice Date"
                value={localInvoiceData.invoiceDate}
                onChange={handleChangeInvoiceData}
                name="invoiceDate"
              />
              <CustomInput
                label="Payment Terms"
                value={localInvoiceData.paymentTerms}
                onChange={handleChangeInvoiceData}
                name="paymentTerms"
              />
            </DrawerMultiRow>
            <CustomInput
              label="Project Description"
              value={localInvoiceData.projectDescription}
              onChange={handleChangeInvoiceData}
              name="projectDescription"
            />
            <HeadingS color={colors["01"]}>Item List</HeadingS>
            <DrawerTableGrid>
              <DefaultInputLabel theme={themeType}>Item Name</DefaultInputLabel>
              <DefaultInputLabel theme={themeType}>Qty.</DefaultInputLabel>
              <DefaultInputLabel theme={themeType}>Price</DefaultInputLabel>
              <DefaultInputLabel theme={themeType}>Total</DefaultInputLabel>
              <HeadingS></HeadingS>

              {localInvoiceData.items.map(({ id, name, quantity, price }) => (
                <React.Fragment key={id}>
                  <CustomInput
                    value={name}
                    onChange={(value) =>
                      handleChangeInvoiceDataItem(value, "name", id)
                    }
                    name="name"
                  />
                  <CustomInput
                    value={quantity}
                    onChange={(value) =>
                      handleChangeInvoiceDataItem(value, "quantity", id)
                    }
                    small={true}
                    name="quantity"
                    type="number"
                  />
                  <CustomInput
                    value={price}
                    onChange={(value) =>
                      handleChangeInvoiceDataItem(value, "price", id)
                    }
                    name="price"
                    type="number"
                  />
                  <HeadingS color={colors["06"]}>
                    {(price * quantity).toFixed(2)}
                  </HeadingS>
                  <DrawerImageSC
                    onClick={() => {
                      const newItems = localInvoiceData.items.filter(
                        (i) => i.id !== id
                      );
                      setLocalInvoiceData({
                        ...localInvoiceData,
                        items: newItems,
                      });
                    }}
                    src={handleImage("trashCan")}
                  />
                </React.Fragment>
              ))}
            </DrawerTableGrid>
            <CustomButton
              type="add"
              text="Add New Item"
              width="100%"
              onClick={() => {
                handleAddItem();
              }}
            />
            <DrawerSectionSC
              ref={bottomRef}
              customStyles="height: 0; padding: 0;"
            ></DrawerSectionSC>
          </DrawerSectionSC>
        </DrawerScrollableSectionSC>
        <DrawerSectionSC
          flexDirection="row"
          customStyles={`padding: 2rem 1rem 2rem 0; border-radius: 0 1rem 1rem 0;
          `}
        >
          <CustomButton
            type="edit"
            text="Discard"
            onClick={() => onClose()}
            customStyles={`margin-right: auto;`}
          />
          <CustomButton
            type="save"
            text="Save as Draft"
            onClick={() => {
              onClose();
            }}
          />
          <CustomButton
            type="secondary"
            text="Save & Send"
            onClick={() => {
              onClose();
            }}
          />
        </DrawerSectionSC>
      </DrawerWrapperSC>
    </OverlaySC>
  );
};

export default CustomDrawer;
