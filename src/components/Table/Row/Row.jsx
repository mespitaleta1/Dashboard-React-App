/* eslint-disable react/prop-types */
import "./Row.style.css"; 

const Row = ({
    item,
    columDefinition
}) => {
    
    return (
         <tr className="row-container">
            {columDefinition.map(({columnId}) =>  <td key={columnId} className="table-body_row">{String(item[columnId])}</td>)}
        </tr>
    );
}

export default Row;