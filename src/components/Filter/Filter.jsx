/* eslint-disable react/prop-types */
import "./Filter.style.css"; 

const Filter = ({TextValue, onChange}) => {  
    return ( 
        <input 
        type="search" 
        className="filter"
        name="search_input"
        value={TextValue}
        onChange={onChange}
        placeholder="Search product ..."/>
    )
}; 

export default Filter;