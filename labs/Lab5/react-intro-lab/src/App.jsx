import react from "react";
import Greeting from "./components/Greeting.jsx";
import UserCard from "./components/UserCard.jsx";
import CardContainer from "./components/CardContainer.jsx";

const App = () => {
    const users = [
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 35 },
        { name: "Alice", age: 30 }
    ];

    const sortUsersByAge = (userArray) => {
        return userArray.sort((a, b) => b.age - a.age);
    };

    const sortedUsers = sortUsersByAge(users);

    return(
        <div>
            <Greeting name={"Adam"} />
            <CardContainer>
                {sortedUsers.map((user, index) => (
                    <UserCard key={index} name={user.name} age={user.age} />
                ))}
            </CardContainer>
        </div>
    );
}

export default App;