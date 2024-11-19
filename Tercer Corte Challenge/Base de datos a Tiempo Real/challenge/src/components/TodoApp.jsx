import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    // Cargar TODOs desde JSON Server
    useEffect(() => {
        fetch("http://localhost:3001/todos")
            .then((response) => response.json())
            .then((data) => setTodos(data))
            .catch((error) => console.error("Error al cargar TODOs:", error));
    }, []);

    // Agregar un TODO
    const handleAddTodo = (todoData) => {
        fetch("http://localhost:3001/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todoData),
        })
            .then((response) => response.json())
            .then((newTodo) => setTodos((prevTodos) => [...prevTodos, newTodo]))
            .catch((error) => console.error("Error al agregar TODO:", error));
    };

    return (
        <div>
            <h1>TODO List</h1>
            {/* Formulario para agregar TODOs */}
            <TodoForm onAddTodo={handleAddTodo} />
            {/* Lista de TODOs cargados */}
            <TodoList todos={todos} />
        </div>
    );
};

export default TodoApp;
