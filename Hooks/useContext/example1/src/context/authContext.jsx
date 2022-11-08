import { createContext, useState } from 'react'

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
    const [color, setColor] = useState('red')

    return <AuthContext.Provider value={{ color, setColor }}>{props.children} </AuthContext.Provider>
}