/* eslint-disable react/prop-types */
import { useProductList } from "../hooks";
import { createContext, useContext } from "react";

export const ProductListContext = createContext();

export const ProductListProvider = ({children}) => {
    const {products, setProducts,allProducts, setAllProducts,loading, setLoading, fetched, setFetched, showError, setShowError} = useProductList();

    const values = {products, setProducts,allProducts, setAllProducts,loading, setLoading, fetched, setFetched, showError, setShowError}

    return <ProductListContext.Provider value={values}>{children}</ProductListContext.Provider>; 
}; 

export const useProductListContext = () => {
    const context = useContext(ProductListContext);
    if(!context) throw new Error('useProductListContext must be wrapped within ProductListProvider'); 
    
    return context;
}