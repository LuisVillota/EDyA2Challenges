import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/thunks/authThunks';

const LogoutButton = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(logoutUser())}>Logout</button>
    );
};

export default LogoutButton;
