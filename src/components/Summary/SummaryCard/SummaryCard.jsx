import "./SummaryCard.style.css";
import { SUMMARY_DATA } from "./SummaryCard.constant";
import Card from "../../Card";

const SummaryCard = () => {
    return (
    <div className='cards-container'>
        <div className='card-body_content'>
          <Card cardData={ SUMMARY_DATA }/>
        </div>
    </div>
    )
}

export default SummaryCard;