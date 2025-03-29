import react from "react";
import UserCard from "./UserCard.jsx";

function CardContainer({children}) {
    const containerStyle = {
        border: '2px solid',
        padding: '20px'
    };

    return <div style={containerStyle}>{children}</div>;
}

export default CardContainer;