/* eslint-disable react/prop-types */
import Row from "../Row/index";
import "./TableBody.css";

const TableBody = ({
    items,
    columDefinition,
    errorMessage
}) => {
    return (
        <tbody className="productTable-body">
            { items.length > 0 ?  
                items.map((item ,idx)=> 
                    <Row 
                        key={idx} 
                        columDefinition={columDefinition}
                        item={item}
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