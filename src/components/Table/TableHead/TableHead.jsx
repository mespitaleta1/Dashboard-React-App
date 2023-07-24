const TableHead = ({
    // eslint-disable-next-line react/prop-types
    columDefinition
}) => {
    return (
    <thead className="productTable-header">
        <tr> { 
            // eslint-disable-next-line react/prop-types
            columDefinition.map((col) => <th className="table-head_column" key={col.id}> {col.title}</th>)
            }
        </tr>
    </thead>
    );
}; 

export default TableHead;