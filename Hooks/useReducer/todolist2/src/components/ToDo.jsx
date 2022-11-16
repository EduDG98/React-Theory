import React from 'react'

const ToDo = ({ todo, dispatchToggleToDoAction }) => {
    return (
        <div>
            <span
                style={{ color: todo.complete ? '#AAA' : '#000' }}
            >{todo.name}</span>
            <button onClick={() => dispatchToggleToDoAction()}>Complete</button>
            <button onClick={dispatchToggleToDoAction}>Delete</button>
        </div>
    )
}

export default ToDo