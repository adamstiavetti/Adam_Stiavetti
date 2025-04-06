import {useState} from "react";
import './App.css'
import {randomNum} from "./helper.js";
import Dice from "./component/Dice.jsx";
import "./styles.css";
import GameCard from "./component/GameCard.jsx";

function App() {
    const [dice1, setDice1] = useState(randomNum());
    const [dice2, setDice2] = useState(randomNum());

  const rollDice = () => {
      const getDice1 = randomNum();
      const getDice2 = randomNum();
    setDice1(getDice1);
    setDice2(getDice2);
    setDiceSum(getDice1 + getDice2);
  };


  return (
    <GameCard>
        <div className="game-box">
              <h1 style={{color: "#ff073a"}}>Feeling Lucky?</h1>
              <Dice value={dice1}/><Dice value={dice2}/>
            <p style={{ fontSize: "24px", margin: "20px 0", color: "#fff" }}>
                Dice Roll: {dice1 + dice2}
            </p>
            {dice1 + dice2 === 7 ? (
                <h2 style={{ color: "yellow" }}>You Got Lucky.. You win!</h2>
            ) : (
              <button onClick={rollDice} style={{ fontSize: "20px", padding: "10px"}}>
                Click to Roll!
              </button>
            )}
        </div>
    </GameCard>
  );
}

export default App
