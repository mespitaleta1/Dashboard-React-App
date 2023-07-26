import { TABLE_HEADER } from "../../App.constants";

export const LOADING = "loading..."; 
export const PRODUCT_COLUMNS = [
    { 
      columnId: "sku",
      title: TABLE_HEADER.SKU,
    },
    { 
     columnId: "title",
      title: TABLE_HEADER.NAME,
    },
    { 
     columnId: "stock",
      title: TABLE_HEADER.STOCK,
    },
    { 
     columnId: "restock",
      title: TABLE_HEADER.RESTOCK,
    },
  ]; 