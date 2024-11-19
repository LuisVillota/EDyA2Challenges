import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import TodoApp from './components/TodoApp';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route 
                        path="/todos" 
                        element={
                            <PrivateRoute>
                                <TodoApp />
                            </PrivateRoute>
                        } 
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;