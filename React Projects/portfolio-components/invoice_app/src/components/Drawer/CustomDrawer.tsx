import React, {useEffect, useState} from "react";
import { useTheme } from "../../ThemeContext";
import { DrawerMultiRow, DrawerScrollableSectionSC, DrawerSectionSC, DrawerTableGrid, DrawerWrapperSC, OverlaySC } from "./Drawer";
import { BodyText, HeadingM, HeadingS, HeadingSVariant } from "../Texts/Typography";
import colors from "../../themes/Colors.json"
import CustomInput from "../Inputs/CustomInput";
import { InvoiceInterface, emptyInvoiceData } from "./invoiceModel";
import { DefaultInputLabel } from "../Inputs/Inputs";
import CustomButton from "../Buttons/CustomButton";
import { nanoid } from "nanoid";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  invoiceData?: InvoiceInterface;
};

const CustomDrawer = ({ isOpen, onClose, invoiceData }: Props) => {
  const [localInvoiceData, setLocalInvoiceData] = useState(invoiceData || emptyInvoiceData);
  const { theme } = useTheme();
  const themeType = theme.type;

  const handleChangeInvoiceData = (value: string, name: string) => {
    setLocalInvoiceData({...localInvoiceData, [name]: value});
  }
  
  useEffect(()=>{
    console.log(localInvoiceData)
  },[localInvoiceData])

  return (
    <OverlaySC isOpen={isOpen} onClick={() => onClose()}>
      <DrawerWrapperSC isOpen={isOpen} theme={themeType} onClick = {(e)=> {
        e.stopPropagation()
      }}>
        <DrawerSectionSC>
          <HeadingM>New Invoice</HeadingM>
        </DrawerSectionSC>
        <DrawerScrollableSectionSC>
          <DrawerSectionSC>
            <HeadingS color={colors["01"]}>Bill From</HeadingS>
            <CustomInput 
              label="Street Address"  
              value={localInvoiceData.streetAddress} 
              onChange = {handleChangeInvoiceData}
              name = "streetAddress"
            />
            <DrawerMultiRow>
              <CustomInput 
                label="City"  
                value={localInvoiceData.city} 
                onChange = {handleChangeInvoiceData}
                name = "city"
                />
              <CustomInput 
                label="Post Code"  
                value={localInvoiceData.postCode} 
                onChange = {handleChangeInvoiceData}
                name = "postCode"
                />
              <CustomInput 
                label="Country"  
                value={localInvoiceData.country} 
                onChange = {handleChangeInvoiceData}
                name = "country"
              />
            </DrawerMultiRow>
          </DrawerSectionSC>
          <DrawerSectionSC>
            <HeadingS color={colors["01"]}>Bill To</HeadingS>
            <CustomInput 
              label="Client's Name"  
              value={localInvoiceData.clientName} 
              onChange = {handleChangeInvoiceData}
              name = "clientName"
            />
            <CustomInput 
              label="Client's Email"  
              value={localInvoiceData.clientEmail} 
              onChange = {handleChangeInvoiceData}
              name = "clientEmail"
            />
            <CustomInput 
              label="Client's Street Address"  
              value={localInvoiceData.clientStreetAddress} 
              onChange = {handleChangeInvoiceData}
              name = "clientStreetAddress"
            />
            <DrawerMultiRow>
              <CustomInput 
                label="City"  
                value={localInvoiceData.clientCity} 
                onChange = {handleChangeInvoiceData}
                name = "clientCity"
                />
              <CustomInput 
                label="Post Code"  
                value={localInvoiceData.clientPostCode} 
                onChange = {handleChangeInvoiceData}
                name = "clientPostCode"
                />
              <CustomInput 
                label="Country"  
                value={localInvoiceData.clientCountry} 
                onChange = {handleChangeInvoiceData}
                name = "clientCountry"
              />
            </DrawerMultiRow>
            <DrawerMultiRow>
              <CustomInput 
                label="Invoice Date"  
                value={localInvoiceData.invoiceDate} 
                onChange = {handleChangeInvoiceData}
                name = "invoiceDate"
                />
              <CustomInput 
                label="Payment Terms"  
                value={localInvoiceData.paymentTerms} 
                onChange = {handleChangeInvoiceData}
                name = "paymentTerms"
                />
            </DrawerMultiRow>
            <CustomInput 
              label="Project Description"  
              value={localInvoiceData.projectDescription} 
              onChange = {handleChangeInvoiceData}
              name = "projectDescription"
            />
            <HeadingS color={colors["01"]}>Item List</HeadingS>
            <DrawerTableGrid>
              
              <DefaultInputLabel theme={themeType}>Item Name</DefaultInputLabel >
              <DefaultInputLabel theme={themeType}>Qty.</DefaultInputLabel >
              <DefaultInputLabel theme={themeType}>Price</DefaultInputLabel >
              <DefaultInputLabel theme={themeType}>Total</DefaultInputLabel >
              <HeadingS></HeadingS>





            </DrawerTableGrid>
            <CustomButton type="add" text="Add New Item" onClick={()=>{
              setLocalInvoiceData({
                ...localInvoiceData,
                items: [...localInvoiceData.items, {name: "", quantity: 0, price: 0, id: nanoid()}]
              })
            }} />
          </DrawerSectionSC>
        </DrawerScrollableSectionSC>
      </DrawerWrapperSC>
    </OverlaySC>
  );
};

export default CustomDrawer;
