import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

const TodoElement = ({ item }) => {
    const todoContext = useContext(TodoContext)

    const handleClickComplete = () => {
        todoContext.dispatchCompleteTodoAction(item.id)
    }
    return (
        <div>
            <span>
                {item.name}
            </span>
            <button onClick={handleClickComplete}>Complete</button>
            <button>Delete</button>
        </div>
    )
}

export default TodoElement;

