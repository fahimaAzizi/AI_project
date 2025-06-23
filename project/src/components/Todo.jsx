import { useState, useRef, useEffect } from 'react';
import './CSS/Todo.css';
import TodoItems from './Todoitem.';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    const value = inputRef.current.value.trim();
    if (value !== '') {
      setTodos([...todos, value]);
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className='todo'>
      <div className='todo-header'>To-Do List</div>
      <div className='todo-add'>
        <input ref={inputRef} type="text" placeholder="Add Your Task" />
        <div className='add-btn' onClick={add}>ADD</div>
      </div>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <TodoItems
            key={index}
            setTodos={setTodos}
            no={index}
            text={todo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
