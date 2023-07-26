/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Table from "../Table/index";
import Error from "../Error/index";
import { getShopifyProducts } from "../../Services/shopifyApi";
import { LOADING,  PRODUCT_COLUMNS } from "./ProductTable.constant";
import "./ProductTable.style.css";


const ProductTable = ({filterText}) => {
    const [loading, setLoading] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]); 
    const [fetched, setFetched] = useState(false);
    const [showError, setShowError] = useState(false);
    const filterTextValue = filterText.toLowerCase();

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

                //throw Error("error")
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

    return loading ? 
        <p className="loading-state">{ LOADING }</p> 
        : showError ? 
          <Error reload={()=> { setFetched(false)}}/> 
        : <Table columDefinition={PRODUCT_COLUMNS} items={products}/>;
}

export default ProductTable;