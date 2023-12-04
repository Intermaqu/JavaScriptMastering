export interface InvoiceInterface{
    "streetAddress": string;
    "city": string;
    "postCode": string;
    "country": string;
    "clientName": string;
    "clientEmail": string;
    "clientStreetAddress": string;
    "clientCity": string;
    "clientPostCode": string;
    "clientCountry": string;
    "invoiceDate": string;
    "paymentTerms": string;
    "projectDescription": string;
    "items": InvoiceItemInterface[];
}

export interface InvoiceItemInterface{
    "id": string
    "name": string;
    "quantity": number;
    "price": number;
}

export const emptyInvoiceData: InvoiceInterface = {
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
    clientName: "",
    clientEmail: "",
    clientStreetAddress: "",
    clientCity: "",
    clientPostCode: "",
    clientCountry: "",
    invoiceDate: "",
    paymentTerms: "",
    projectDescription: "",
    items: []
}   