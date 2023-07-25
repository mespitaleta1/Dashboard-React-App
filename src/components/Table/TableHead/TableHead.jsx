/* eslint-disable react/prop-types */
const TableHead = ({
    columDefinition
}) => {
    return (
    <thead className="productTable-header">
        <tr>{columDefinition.map((col, idx) => <th key={idx} className="table-head_column">{col.title}</th>)}</tr>
    </thead>
    );
}; 

export default TableHead;