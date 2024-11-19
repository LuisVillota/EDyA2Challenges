import React from "react";

const TodoList = ({ todos }) => {
    if (todos.length === 0) {
        return <p>No hay TODOs en la lista.</p>;
    }

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <p>Puntos: {todo.points}</p>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
