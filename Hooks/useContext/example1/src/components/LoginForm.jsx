import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/authContext'

export const LoginForm = ({ login }) => {
    const [details, setDetails] = useState({ name: '', password: '' })
    const authContext = useContext(AuthContext)

    const submitHandler = (event) => {
        event.preventDefault();
        login(details)
    }
    console.log(authContext)

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='name'>Username</label>
                <input type='text' name='name' id='name' onChange={event => setDetails({ ...details, name: event.target.value })} value={details.name} required />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' onChange={event => setDetails({ ...details, password: event.target.value })} value={details.password} required />
                <input type='submit' />
            </div>
        </form>

    )
}

