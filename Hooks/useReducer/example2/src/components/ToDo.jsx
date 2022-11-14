import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'

const ACTIONS = {
    ADD_TODO: 'add_todo',
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, addNewTodoAction(action.name)]
    }
}

const addNewTodoAction = (name) => {
    return { name: name, complete: false }
}

export const ToDo = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, []);

    const dispatchAddNewTodoAction = (name) => {
        dispatch({ type: ACTIONS.ADD_TODO, name })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatchAddNewTodoAction(name)
        setName('')
    }

    console.log(state)

    return (
        <form onSubmit={handleSubmit}>
            <input
                typr='text'
                value={name}
                onChange={event => setName(event.target.value)}
            />
        </form>
    )
}
