import { useState, useReducer, useMemo } from 'react'
import { createContext } from 'react';
import { v4 as uuid } from 'uuid';

export const ACTIONS = {
    ADD_TODO: 'add_todo',
    COMPLETE_TODO: 'complete_todo',
    DELETE_TODO: 'delete_todo',
}

export const TodoContext = createContext(null)

//ACTIONS
const addNewTodoAction = (state, action) => {
    const newState = [...state];

    const newTodoElement = { id: uuid(), name: action.name, complete: false };
    newState.push(newTodoElement);

    return newState;
};

const completeTodoAction = (state, action) => {
    const newState = [...state];

    return newState.map(todoItem => {
        if (todoItem.id === action.id) {
            return { ...todoItem, complete: !todoItem.complete };
        }
        return todoItem;
    })
};

const deleteTodoAction = (state, action) => {
    const newState = [...state];

    return newState.filter(todoItem => todoItem.id !== action.id);
}

//REDUCER
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return addNewTodoAction(state, action);
        case ACTIONS.COMPLETE_TODO:
            return completeTodoAction(state, action);
        case ACTIONS.DELETE_TODO:
            return deleteTodoAction(state, action);
        default:
            return state;
    }
};

//PROVIDER
export const TodoContextProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, []);

    const dispatchAddNewTodoAction = (name) => {
        dispatch({ type: ACTIONS.ADD_TODO, name });
    };

    const dispatchCompleteTodoAction = (id) => {
        dispatch({ type: ACTIONS.COMPLETE_TODO, id });
    };

    const dispatchDeleteTodoAction = (id) => {
        dispatch({ type: ACTIONS.DELETE_TODO, id });
    };

    //USEMEMO
    const values = useMemo(() => {
        return {
            name,
            setName,
            state,
            dispatch,
            dispatchAddNewTodoAction,
            dispatchCompleteTodoAction,
            dispatchDeleteTodoAction

        };
    }, [name, state]);

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext