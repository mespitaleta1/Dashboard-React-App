/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import {TABLE_HEADER} from "../../App.constants";
import { getShopifyProducts } from "../../Services/shopifyApi";
import Table from "../Table/index";


const ProductTable = () => {
    const [data, setData] = useState([]); 
    const [fetched, setFetched] = useState(false);

    const productColumns = [
        { 
          id:1,
          title: TABLE_HEADER.SKU , 
        },
        { 
          id:2,
          title: TABLE_HEADER.NAME,
        },
        { 
          id:3,
          title: TABLE_HEADER.STOCK,
        },
        { 
          id:4,
          title: TABLE_HEADER.RESTOCK,
        },
      ]; 
    
    useEffect(()=> {
        const getAndSetData = async () => {
            try {
                const data = await getShopifyProducts();
                setData(data.products);
                setFetched(true);
            } catch (error) {
                console.error("Error", error);
            }
        }; 

        if(!fetched) {
            getAndSetData();
        }
    }, [fetched]);

    return (<Table columDefinition={productColumns} rowDefinition={data} />)
}

export default ProductTable; 