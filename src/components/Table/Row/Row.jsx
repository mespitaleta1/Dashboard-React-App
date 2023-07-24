import "./Row.css"; 

/* eslint-disable react/prop-types */
const Row = ({
    id, 
    sku, 
    productName, 
    quantityOnStock, 
    restock 
}) => {
    return (
        <>
         <tr key={id}>
            <td id="sku" className="table-body_row">{sku}</td>
            <td className="table-body_row">{productName}</td>                        
            <td className="table-body_row">{quantityOnStock}</td>
            <td id="restock" className="table-body_row">{restock}</td>
        </tr>
        </>
    );
}

export default Row;