
//foundation
import React from "react"

//build component
const MonsterCard = (props) => {
        const {firstName, lastName, age, type, moreInfo} = props
        return (
            <>
                <div className="monster-card">
                    <h2>{firstName} {lastName}</h2>
                        <p>Age: {age}</p>
                        <p>Type: {type}</p>
                        <p>More Info: {moreInfo}</p>
                </div>
            </>
        );
    };
export default MonsterCard;

