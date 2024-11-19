import React, { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTodo({ title, description, points: Number(points) });
        setTitle("");
        setDescription("");
        setPoints("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Puntos"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
            />
            <button type="submit">Agregar TODO</button>
        </form>
    );
};

export default TodoForm;
