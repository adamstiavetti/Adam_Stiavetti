const GameCard = ({children}) => {
    const cardstyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
        width: "100vw",
    };
    return <div style={cardstyle}>{children}</div>;
};

export default GameCard;