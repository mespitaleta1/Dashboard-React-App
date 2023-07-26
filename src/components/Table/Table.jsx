/* eslint-disable react/prop-types */
import TableHead from "./TableHead";
import TableBody from "./TableBody/TableBody";
import { ERRORS } from "./Table.constants";
import "./Table.style.css";


const Table = ({
    columDefinition,
}) => {    
    return (
        <div className="productTable-container">
            <table className="productTable">
                <TableHead columDefinition={columDefinition} />
                <TableBody columDefinition={columDefinition} errorMessage={ ERRORS.NO_ROW_ELEMENTS } />
            </table>
        </div>
    )
};

export default Table; 