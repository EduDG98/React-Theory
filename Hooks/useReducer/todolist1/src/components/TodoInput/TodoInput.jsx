import React, { useState } from 'react';

export const TodoInput = ({ oldName = ''}) => {
  const [name, setName] = useState(oldName);

  // const todoContext = useContext(TodoContext);
  // const todoContext = {
  //   dispatchAddNewTodoAction: () => {
  //   },
  //   setName: name => console.log(name),
  //   name: '',
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // todoContext.dispatchAddNewTodoAction(todoContext.name);
    // todoContext.setName('');
    setName('');
  };

  const handleChange = event => {
    // todoContext.setName(event.target.value);
    setName(event.target.value);
  };

  return (
    <div className='inputWrapper'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          // value={todoContext.name}
          value={name}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default TodoInput;