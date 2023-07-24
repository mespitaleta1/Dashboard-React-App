/* eslint-disable react/prop-types */
import TableHead from "./TableHead";
import TableBody from "./TableBody/TableBody";
import { NO_ROW_ELEMENT_TEXT } from "./Table.constants";
import "./Table.css";


const Table = ({
    columDefinition,
    rowDefinition
}) => {

    return (
        <div className="productTable-container">
            <table className="productTable">
                <TableHead columDefinition={columDefinition} />
                <TableBody rowDefinition={rowDefinition} errorMessage={ NO_ROW_ELEMENT_TEXT } />
            </table>
        </div>
    )
};

export default Table; 