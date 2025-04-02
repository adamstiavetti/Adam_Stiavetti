import Greeting from "./components/Greeting.tsx";
import ProfileCard from "./components/ProfileCard.tsx";
import './App.css'

function App() {


  return (
   <div>
       <h1>
           <ProfileCard firstName={"Adam"} lastName={"Stiavetti"} age={28}/>
           <ProfileCard firstName={"Yuri"} lastName={"Simabukuro"} age={28}/>
       </h1>
   </div>
  );
};

export default App
