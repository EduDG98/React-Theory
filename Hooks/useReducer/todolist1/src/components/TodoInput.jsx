import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

export const TodoInput = () => {
    const todoContext = useContext(TodoContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        todoContext.dispatchAddNewTodoAction(todoContext.name);
        todoContext.setName('');
    };

    return (
        <div className='inputWrapper'>
            <form onSubmit={handleSubmit}>
                <input
                    typr='text'
                    value={todoContext.name}
                    onChange={event => todoContext.setName(event.target.value)}
                />
            </form>
        </div>
    )
}

export default TodoInput;