import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {

  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInput, setListInput] = useState('');
  
  const handleAddTodo = () => {
    e.preventDefault();
    if (headingInput.trim() !== '') {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
    }
    setHeadingInput('');
  };
  const handleHeadingChange = (e) => {
    setHeadingInput(e.target.value);
  };
  const handleAddList = (index) => {
    if (listInput.trim() !== '') {
      const newTodos = [...todos];
      newTodos[index].lists.push(listInput);
      setTodos(newTodos);
      setListInput('');
    }
  };
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <form onSubmit={handleAddTodo}>
            <input
              type="text"
              className="heading-input"
              placeholder="Enter heading"
              onChange={handleHeadingChange}
              
            />
            <button className="add-list-button" type='submit'>Add Heading</button>
          </form>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div className="heading_todo">
              <h3>{todo.heading}</h3>
              <button className="delete-button-heading" onClick={()=> handleDeleteTodo(index)}>Delete Heading </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
