/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import {TABLE_HEADER} from "../../App.constants";
import { getShopifyProducts } from "../../Services/shopifyApi";
import Table from "../Table/index";


const ProductTable = () => {
    const [products, setProducts] = useState([]); 
    const [fetched, setFetched] = useState(false);

    const productColumns = [
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
    
    useEffect(()=> {
        const getAndSetData = async () => {
            try {
                const data = await getShopifyProducts();
                const products = data.products.reduce((arr, item) => {
                  arr.push({
                      sku: item.variants[0].sku,
                      title: item.title,
                      stock: item.variants[0].inventory_quantity,
                      restock: item.variants[0].requires_shipping
                    })
                
                  return arr;
                }, []); 
                setProducts(products);
                setFetched(true);
            } catch (error) {
                console.error("Error", error);
            }
        }; 

        if(!fetched) {
            getAndSetData();
        }
    }, [fetched]);



    return (<Table columDefinition={productColumns} items={products} />)
}

export default ProductTable; 