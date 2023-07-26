/* eslint-disable react/prop-types */
import Row from "../Row/index";
import "./TableBody.style.css";
import {useProductListContext} from "../../../context/index"
const TableBody = ({
    columDefinition,
    errorMessage
}) => {

    const { products: items} = useProductListContext();

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