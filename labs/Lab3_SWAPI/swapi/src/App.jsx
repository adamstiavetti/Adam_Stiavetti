import { useState } from 'react'
import './App.css'
import axios from "axios";
import Table from "./components/Table.jsx";

function App() {
  const [people, setPeople] = useState([]);
  const [showTable, setShowTable] = useState(false);


  const handleSubmit = async () => {
    try{
      const res = await axios.get("https://swapi.dev/api/people")
      setPeople(res.data.results);
      setShowTable(true);
    } catch (err) {
      console.error("Error within API fetching", err)
    }
  };


  const handleReset = () => {
    setPeople([]);
    setShowTable(false);
  };

  return (
      <div className="App">
        <h1>Characters in a Galaxy Far.. Far.. Away</h1>

        <button onClick={handleSubmit}>Display Characters</button>
        <button onClick={handleReset}>Reset</button>

        {showTable && <Table data = {people}/>}
      </div>
  )
}

export default App
