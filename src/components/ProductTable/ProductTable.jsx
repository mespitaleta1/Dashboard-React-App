/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Table from "../Table/index";
import { getShopifyProducts } from "../../Services/shopifyApi";
import { TABLE_HEADER } from "../../App.constants";


const ProductTable = ({filterText}) => {
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]); 
    const [fetched, setFetched] = useState(false);
    const filterTextValue = filterText.toLowerCase();

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
                setAllProducts(products);
                setFetched(true);
            } catch (error) {
                console.error("Error", error);
            }
        }; 

        if(!fetched) {
            getAndSetData();
        }
    }, [fetched]);


    useEffect(()=> {   
      if(filterTextValue) {
        const filteredProducts = allProducts.filter(product =>
          product.title.toLowerCase().includes(filterTextValue) || 
          product.sku.toLowerCase().includes(filterTextValue)
        );
        setProducts(filteredProducts);
      } 
      
      if(!filterTextValue && allProducts.length > 0) {
        setProducts(allProducts);
      }

  }, [filterText]);

    return (<Table columDefinition={productColumns} items={products}/>)
}

export default ProductTable;