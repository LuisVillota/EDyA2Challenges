import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
        <h1>Bienvenido a la aplicación TODOs</h1>
        <p>Por favor, inicia sesión para acceder a tus tareas.</p>
        <Link to="/login">
            <button>Iniciar Sesión</button>
        </Link>
    </div>
);

export default HomePage;