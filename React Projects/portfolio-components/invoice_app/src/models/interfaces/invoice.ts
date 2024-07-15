import {InvoicePaymentTermsType, InvoiceStatusType} from "../types/invoice";

export interface InvoiceInterface {
    id: string;
    address: InvoiceAddress;
    client:{
        name: string;
        email: string;
        address: InvoiceAddress;
    }
    invoiceDate: string;
    paymentTerms: InvoicePaymentTermsType;
    description: string;
    items: InvoiceItem[];
    status: InvoiceStatusType;
}

export interface InvoiceAddress {
    street: string;
    city: string;
    postCode: string;
    country: string;
}

export interface InvoiceItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}