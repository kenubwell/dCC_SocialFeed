import React from "react";
import './CurrentDate.css';


const CurrentDate = () => {

    const currentDate = new Date();
    const date = `${(currentDate.getMonth()+1)}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

    return (  
        <div>
            <h5 className = 'date-display'>{date}</h5>
        </div>
    );
}
 
export default CurrentDate;