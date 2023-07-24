/* eslint-disable react/prop-types */
import Row from "../Row/index";
import "./TableBody.css";

const TableBody = ({
    rowDefinition,
    errorMessage
}) => {

    return (
        <tbody className="productTable-body">
            { rowDefinition.length > 0 ?  
                rowDefinition.map((product,idx)=> 
                    <Row 
                        key={idx} 
                        sku={product.variants[0].sku} 
                        productName={product.title} 
                        quantityOnStock={product.variants[0].inventory_quantity} 
                        restock={String(product.variants[0].requires_shipping)} 
                    />) 
                : (
                <tr>
                    <td className="table-body_row">{ errorMessage }</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>)
            }
        </tbody>
    ); 
};  

export default TableBody;