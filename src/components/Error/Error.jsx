/* eslint-disable react/prop-types */
import { UNFOUND_DATA, RELOAD_PAGE } from "./Error.constant";
import "./Error.style.css";

const Error = ({ reload }) => {
    return (
        <div className="error-container">
            <p className="error-state">{UNFOUND_DATA}</p>
            <button className="reload-button" onClick={reload}>{ RELOAD_PAGE }</button>
        </div>
    );
};

export default Error;