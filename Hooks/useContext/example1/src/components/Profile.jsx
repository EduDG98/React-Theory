import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext';

export const Profile = () => {
    const authContext = useContext(AuthContext)

    const handlerLogout = () => {
        console.log('Logout');
        authContext.setIsSigned(false);
    }

    return (
        <div>
            <h2>Welcome, {authContext.user}</h2>
            <button onClick={handlerLogout}>Logut</button>
        </div>
    )
}

