import React, { useReducer } from 'react'

const ACTIONS = {
    UPDATE_TEXT: 'UPDATE_TEXT',
    ADD_TO_DO: 'ADD_TO_DO'
}

const initialState = {
    name: '',
    toDoList: []
}

const updateTextAction = (state, action) => {
    const newState = { ...state };
    newState.name = action.newName;
    return newState;
}

const addToDoAction = (state, action) => {
    const newState = { ...state };
    newState.toDoList = [...state.toDoList, newToDo(action.toDoName)]
}

const newToDo = (name) => {
    return { name: name, complete: false }
}

const toDoReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_TEXT:
            return updateTextAction(state, action);
        case ACTIONS.ADD_TO_DO:
            return addToDoAction(state, action);
        default:
            return state;
    }
}


export const ToDoForm = () => {
    const [state, dispatch] = useReducer(toDoReducer, initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatchAddNewToDoAction(event.target.value)
    }

    const dispatchUpdateTextAction = (newName) => {
        console.log(newName)
        dispatch({ type: ACTIONS.UPDATE_TEXT, newName });
    }

    const dispatchAddNewToDoAction = (toDoName) => {
        dispatch({ type: ACTIONS.ADD_TO_DO, toDoName })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={event => dispatchUpdateTextAction(event.target.value)}
            />
        </form>
    )
}
