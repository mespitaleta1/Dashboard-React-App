import Row from "./Row";
import { TABLE_HEADER, NO_ROW_ELEMENT_TEXT } from "./Table.constants";
import { data } from "../../data";
import "./Table.css";

const Table = () => {
  const noRowElemet = (
        <tr>
        <td className="table-body_row">{NO_ROW_ELEMENT_TEXT}</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>); 

    return (
        <div className="productTable-container">
            <table className="productTable">
                <thead className="productTable-header">
                    <tr>
                        <th className="table-head_column">{TABLE_HEADER.SKU}</th>
                        <th className="table-head_column">{TABLE_HEADER.NAME}</th>
                        <th className="table-head_column">{TABLE_HEADER.STOCK}</th>
                        <th className="table-head_column">{TABLE_HEADER.RESTOCK}</th>
                    </tr>
                </thead>
                <tbody className="productTable-body">
                    { data.length > 0 ?  
                        data.map((product,idx)=> 
                        
                        <Row 
                            key={idx} 
                            sku={product.variants[0].sku} 
                            productName={product.title} 
                            quantityOnStock={product.variants[0].inventory_quantity} 
                            restock={String(product.variants[0].requires_shipping)} 
                        />) :  
                        noRowElemet
                    }
                </tbody>
            </table>
        </div>
    )
};

export default Table; 

