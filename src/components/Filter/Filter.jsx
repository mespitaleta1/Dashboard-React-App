/* eslint-disable react/prop-types */
import { PLACEHOLDER } from "./Filter.constant";
import "./Filter.style.css"; 

const Filter = ({TextValue, onChange}) => {  
    return ( 
        <input 
        type="search" 
        className="filter"
        name="search_input"
        value={TextValue}
        onChange={onChange}
        placeholder={ PLACEHOLDER }/>
    )
}; 

export default Filter;