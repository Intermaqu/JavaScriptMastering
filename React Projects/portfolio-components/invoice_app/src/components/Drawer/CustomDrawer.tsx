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
import { DefaultInputLabel } from "../Inputs/Inputs";
import CustomButton from "../Buttons/CustomButton";
import { nanoid } from "nanoid";
import { handleImage } from "../../utils";
import { InvoiceInterface } from "../../models/interfaces/invoice";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  invoiceData?: InvoiceInterface;
};

const EMPTY_INVOICE: InvoiceInterface = {
  id: "",
  address: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  client: {
    name: "",
    email: "",
    address: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
  },
  invoiceDate: "",
  paymentTerms: "Net 30 Days",
  description: "",
  items: [],
  status: "draft",
};

const CustomDrawer = ({ isOpen, onClose, invoiceData }: Props) => {
  const [localInvoiceData, setLocalInvoiceData] = useState(
    invoiceData || EMPTY_INVOICE
  );
  const [isScrollable, setIsScrollable] = useState<Boolean>(false);
  const { theme } = useTheme();
  const themeType = theme.type;

  const bottomRef = React.useRef<HTMLDivElement>(null);
  const scrollableRef = React.useRef<HTMLDivElement>(null);

  const handleChangeInvoiceData = (value: string, name: string) => {
    setLocalInvoiceData({ ...localInvoiceData, [name]: value });
  };

  const handleChangeInvoiceClientData = (value: string, name: string) => {
    const newInvoiceData = { ...localInvoiceData };
    newInvoiceData.client = { ...newInvoiceData.client, [name]: value };
    setLocalInvoiceData(newInvoiceData);
  };

  const handleChangeInvoiceClientAddressData = (
    value: string,
    name: string
  ) => {
    const newInvoiceData = { ...localInvoiceData };
    newInvoiceData.client.address = {
      ...newInvoiceData.client.address,
      [name]: value,
    };
    setLocalInvoiceData(newInvoiceData);
  };

  const handleChangeInvoiceAddressData = (value: string, name: string) => {
    const newInvoiceData = { ...localInvoiceData };
    newInvoiceData.address = { ...newInvoiceData.address, [name]: value };
    setLocalInvoiceData(newInvoiceData);
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

  const handleIsScrollable = () => {
    if (scrollableRef.current) {
      const { scrollHeight, clientHeight } = scrollableRef.current;
      setIsScrollable(scrollHeight > clientHeight);
    }
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

    handleIsScrollable();
  };

  useEffect(() => {
    handleIsScrollable();
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
              value={localInvoiceData.address.street}
              onChange={handleChangeInvoiceAddressData}
              name="street"
            />
            <DrawerMultiRow>
              <CustomInput
                label="City"
                value={localInvoiceData.address.city}
                onChange={handleChangeInvoiceAddressData}
                name="city"
              />
              <CustomInput
                label="Post Code"
                value={localInvoiceData.address.postCode}
                onChange={handleChangeInvoiceAddressData}
                name="postCode"
              />
              <CustomInput
                label="Country"
                value={localInvoiceData.address.country}
                onChange={handleChangeInvoiceAddressData}
                name="country"
              />
            </DrawerMultiRow>
          </DrawerSectionSC>
          <DrawerSectionSC>
            <HeadingS color={colors["01"]}>Bill To</HeadingS>
            <CustomInput
              label="Client's Name"
              value={localInvoiceData.client.name}
              onChange={handleChangeInvoiceClientData}
              name="clientName"
            />
            <CustomInput
              label="Client's Email"
              value={localInvoiceData.client.email}
              onChange={handleChangeInvoiceClientData}
              name="clientEmail"
            />
            <CustomInput
              label="Client's Street Address"
              value={localInvoiceData.client.address.street}
              onChange={handleChangeInvoiceClientAddressData}
              name="clientStreetAddress"
            />
            <DrawerMultiRow>
              <CustomInput
                label="City"
                value={localInvoiceData.client.address.city}
                onChange={handleChangeInvoiceClientAddressData}
                name="clientCity"
              />
              <CustomInput
                label="Post Code"
                value={localInvoiceData.client.address.postCode}
                onChange={handleChangeInvoiceClientAddressData}
                name="clientPostCode"
              />
              <CustomInput
                label="Country"
                value={localInvoiceData.client.address.country}
                onChange={handleChangeInvoiceClientAddressData}
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
              value={localInvoiceData.description}
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
