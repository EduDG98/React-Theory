import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import TodoInput from './TodoInput/TodoInput';
import TodoElement from './TodoElement';

export const Main = () => {
    const todoContext = useContext(TodoContext);

    return (
        <div className='mainContent'>
            <TodoInput />

            <div className='elementWrapper'>
                {todoContext.state.map(todoItemElement => {
                    return <TodoElement key={todoContext.state.id} item={todoItemElement} />
                })}
            </div>
        </div>
    )
};
