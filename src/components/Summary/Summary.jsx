/* eslint-disable react/prop-types */
import { TITLE } from "./Summary.constant";
import "./Summary.style.css";
import SummaryCard from "./SummaryCard";

const Summary = ({children}) => {
    return (
      <div className='aside-box'>
          <div className="dashboard-icon">
            <span className="logo-representation"></span>
            <h2 className="main-title">{ TITLE }</h2>
          </div>
         {children}
        <SummaryCard/>
      </div>
    )
}

export default Summary; 