import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

const TodoElement = ({ item }) => {
    const todoContext = useContext(TodoContext);
    let buttonAction = 'Complete';

    const handleClickComplete = () => {
        buttonAction = 'Uncomplete';
        todoContext.dispatchCompleteTodoAction(item.id);
    };

    const hadleClickDelete = () => {
        todoContext.dispatchDeleteTodoAction(item.id);
    };

    return (
        <>
            <span style={{ 'textDecoration': item.complete ? 'line-through' : 'none' }}>
                {item.name}
            </span>
            <div className='buttonWrapper'>
                <button onClick={handleClickComplete}>{buttonAction}</button>
                <button onClick={hadleClickDelete}>Delete</button>
            </div>
        </>
    )
}

export default TodoElement;

