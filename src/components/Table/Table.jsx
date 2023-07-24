import TableHead from "./TableHead";
import Row from "./Row";
import { data } from "../../data";
import { NO_ROW_ELEMENT_TEXT } from "./Table.constants";
import "./Table.css";


const Table = ({
    // eslint-disable-next-line react/prop-types
    columDefinition
}) => {
    const noRowElemet = (
        <tr>
        <td className="table-body_row">{ NO_ROW_ELEMENT_TEXT }</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>); 


    return (
        <div className="productTable-container">
            <table className="productTable">
                <TableHead columDefinition={columDefinition} />
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

