import React from "react";
import MonsterCard from "./components/MonsterCard.jsx";
import {monsters} from "./Util/database.js";

function App() {
    const displayMonsterCards = monsters.map((monster,index) => (
        <MonsterCard {...monster} key={index} />
    ))

    return (
        <div>
            <h1>Monster Database</h1>
            {displayMonsterCards}
        </div>
    );
}

export default App;