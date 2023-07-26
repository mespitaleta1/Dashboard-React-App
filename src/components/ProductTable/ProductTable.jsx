/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect} from "react";
import Table from "../Table/index";
import Error from "../Error/index";
import { LOADING,  PRODUCT_COLUMNS } from "./ProductTable.constant";
import "./ProductTable.style.css";
import { useProductListContext } from "../../context/ProductListContext";


const ProductTable = ({filterText}) => {
  const filterTextValue = filterText.toLowerCase();
  const {allProducts, setProducts, loading, setFetched, showError} = useProductListContext();
 
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
        : <Table columDefinition={PRODUCT_COLUMNS}/>;
}

export default ProductTable;