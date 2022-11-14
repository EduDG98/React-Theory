import React, { useReducer } from 'react'
import ToDo from './ToDo';

const ACTIONS = {
    UPDATE_TEXT: 'UPDATE_TEXT',
    ADD_TODO: 'ADD_TO_DO',
    TOGGLE_TODO: 'TOGGLE_TODO'
}

const initialState = {
    name: '',
    todos: []
}


// ACTIONS FUNTIONS
const updateTextAction = (state, action) => {
    const newState = { ...state };
    newState.name = action.name;
    return newState;
}

const addNewTodoAction = (state, action) => {
    const newState = { ...state }
    newState.todos = [...state.todos, { name: action.name, complete: false }]
    return newState;
}

const toggleTodoAction = (state) => {
    const newState = { ...state };
    // newState.todos.complete = !(newState.todos.complete);
    newState.todos.map(todoItem => {
        console.log('prueba', todoItem)
        return { ...todoItem, complete: !todoItem.complete }
    })
    return newState;
}

// REDUCER
const toDoReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_TEXT:
            return updateTextAction(state, action);
        case ACTIONS.ADD_TODO:
            return addNewTodoAction(state, action);
        case ACTIONS.TOGGLE_TODO:
            return toggleTodoAction(state);
        default:
            return state;
    }
}


export const ToDoForm = () => {
    const [state, dispatch] = useReducer(toDoReducer, initialState);

    // DISPATCHS
    const dispatchUpdateTextAction = (name) => {
        dispatch({ type: ACTIONS.UPDATE_TEXT, name: name });
    }

    const dispatchAddNewToDoAction = (name) => {
        dispatch({ type: ACTIONS.ADD_TODO, name })
    }

    const dispatchToggleToDoAction = () => {
        dispatch({ type: ACTIONS.TOGGLE_TODO })
    }

    // HANDLES
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatchAddNewToDoAction(state.name)
        dispatchUpdateTextAction('')
    }

    console.log(state.todos)


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={state.name}
                    onChange={event => dispatchUpdateTextAction(event.target.value)}
                />
            </form>
            {(state.todos).map(item => {
                return <ToDo todo={item} dispatchToggleToDoAction={dispatchToggleToDoAction} />
            })}
        </>
    )
}
