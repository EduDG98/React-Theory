import { createContext, useMemo, useReducer, useState } from 'react'

export const ADMIN_USER = {
    username: 'admin',
    password: 'admin'
}

export const AuthContext = createContext(null);

const updateUsernameAction = (state, action) => {
    // 1. Duplicar el estado
    const newState = { ...state };
    // 2. Actualizo el estado con lo que quiero
    newState.user = action.newUsername
    // 3. Devuelvo el estado actualizado
    return newState;
}

const authReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return updateUsernameAction(state, action);
        case 'UPDATE_PASSWORD':
            return updatePasswordAction;
        case 'SET_IS_SIGNED_IN':
            return updateIsSignedAction;
        default:
            return { ...state };
    }
}

const initialState = {
    user: '',
    password: '',
    isSigned: false
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    const values = useMemo(() => {
        return {
            state,
            dispatch,
            dispatchUpdateUserName: (newUsername) => dispatch({ type: 'UPDATE_USER', newUsername })

        }
    }, [state])

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}