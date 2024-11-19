import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const TodoApp = () => {
    const { state, logout } = useContext(AuthContext);

    return (
        <div>
            <h1>Todo App</h1>
            {state.user ? (
                <div>
                    <p>Welcome, {state.user.name}!</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <p>You are not logged in.</p>
            )}
            {}
            <div>
                <h2>Your TODOs</h2>
                {}
                <ul>
                    <li>Comprar comestibles</li>
                    <li>Terminar el proyecto</li>
                    <li>Leer un libro</li>
                </ul>
            </div>
        </div>
    );
};

export default TodoApp;
