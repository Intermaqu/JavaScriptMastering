import { InvoiceInterface } from "./models/interfaces/invoice";

export const DATA: InvoiceInterface[] = [
  {
    "id": "XM9141",
    "address": {
      "street": "1234 Elm St",
      "city": "Springfield",
      "country": "USA",
      "postCode": "62701"
    },
    "client": {
      "name": "John Doe",
      "email": "john.doe@gmail.com",
      "address": {
        "street": "1234 Elm St",
        "city": "Springfield",
        "country": "USA",
        "postCode": "62701"
      }
    },
    "invoiceDate": "2020-01-01",
    "paymentTerms": "Net 30 Days",
    "description": "Graphic Design",
    "status": "paid",
    "items": [
      {
        "id": "1",
        "name": "Banner Design",
        "quantity": 1,
        "price": 150
      },
      {
        "id": "2",
        "name": "Email Design",
        "quantity": 2,
        "price": 200
      }
    ]
  },
  {
    "id": "XM9142",
    "address": {
      "street": "1234 Elm St",
      "city": "Springfield",
      "country": "USA",
      "postCode": "62701"
    },
    "client": {
      "name": "Jane Doe",
      "email": "john.doe@gmail.com",
      "address": {
        "street": "1234 Elm St",
        "city": "Springfield",
        "country": "USA",
        "postCode": "62701"
      }
    },
    "invoiceDate": "2020-01-01",
    "paymentTerms": "Net 30 Days",
    "description": "Graphic Design",
    "status": "pending",
    "items": [
      {
        "id": "1",
        "name": "Banner Design",
        "quantity": 1,
        "price": 150
      },
      {
        "id": "2",
        "name": "Email Design",
        "quantity": 2,
        "price": 200
      }
    ]
  }
]


