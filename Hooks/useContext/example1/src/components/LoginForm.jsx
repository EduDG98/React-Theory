import React, { useContext } from 'react'
import { ADMIN_USER, AuthContext } from '../context/authContext'

export const LoginForm = () => {
    const authContext = useContext(AuthContext)

    const handleLogin = () => {
        if ((authContext.user == ADMIN_USER.username) && (authContext.password == ADMIN_USER.password)) {
            console.log('Logged in');
            authContext.setIsSigned(true)
            authContext.setUser(authContext.user)
            dispatchUpdateUsername(authContext.user)
        } else {
            console.log('Details not match')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Username</label>
                <input type='text' name='name' id='name' onChange={event => authContext.setUser(event.target.value)} required />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' onChange={event => authContext.setPassword(event.target.value)} required />
                <input type='submit' />
            </div>
        </form>

    )
}

