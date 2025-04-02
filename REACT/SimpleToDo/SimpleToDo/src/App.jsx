import React, { useState } from "react";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (event) => {
        setNewTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodo.trim() === "") return;

        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        setNewTodo(""); // Clear input
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    className="todo-input"
                    autoComplete="off"
                    type="text"
                    name="newTodo"
                    placeholder="What needs to be done"
                    value={newTodo}
                    onChange={handleChange}
                />
                <input type="submit" className="save-button" />
            </form>

            <div className="todo-content">
                <ol>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default App;
