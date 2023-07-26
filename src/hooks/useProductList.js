import { useEffect, useState } from "react";
import {getShopifyProducts} from "../Services/shopifyApi";

export const useProductList = () => {
    const [loading, setLoading] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]); 
    const [fetched, setFetched] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(()=> {
        const getAndSetData = async () => {
            try {
                setLoading(true);
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
                setLoading(false);
                setShowError(false);

            } catch (error) {
              setLoading(false);
              setShowError(true);
              console.error("Error", error);
            }
        }; 

        if(!fetched) {
            getAndSetData();
        }
    }, [fetched]);

    return {
        loading, 
        setLoading, 
        allProducts, 
        setAllProducts, 
        products, 
        setProducts, 
        showError, 
        setShowError, 
        fetched, 
        setFetched 
    }
};