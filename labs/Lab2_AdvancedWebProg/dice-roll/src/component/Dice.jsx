import {diceArray} from "../helper.js";

function Dice({value}) {
    const iconName = diceArray[value - 1];
    const className = `fas fa-dice-${iconName}`;
    return (
        <div>
            <i className={className} style={{ fontSize: "80px", margin: "10px"}}/>
        </div>
    );
};

export default Dice;