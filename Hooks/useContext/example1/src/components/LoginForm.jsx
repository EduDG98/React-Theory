import React, { useContext } from 'react'
import { ADMIN_USER, AuthContext } from '../context/authContext'

export const LoginForm = () => {
    const authContext = useContext(AuthContext)

    const handleLogin = () => {
        if ((authContext.state.user == ADMIN_USER.username) && (authContext.state.password == ADMIN_USER.password)) {
            console.log('Logged in');
            authContext.dispatchUpdateIsSigned()
            authContext.dispatchUpdateUsername(authContext.state.user)
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
                <input
                    type='text'
                    name='name'
                    id='name'
                    onChange={event => authContext.dispatchUpdateUsername(event.target.value)}
                    required
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    onChange={event => authContext.dispatchUpdatePassword(event.target.value)}
                    required
                />
                <input type='submit' />
            </div>
        </form>

    )
}

