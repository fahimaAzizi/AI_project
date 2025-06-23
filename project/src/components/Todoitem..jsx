import './CSS/Todo.css';
import { FaCheck, FaTimes } from 'react-icons/fa';

const TodoItems = ({ todo, onComplete, onDelete }) => {
  return (
    <div className={`todoitems ${todo.completed ? 'completed' : ''}`}>
      <div className="todoitems-container">
        <span className={`text ${todo.completed ? 'line-through' : ''}`}>
          {todo.text}
        </span>
        <div className="icons">
          <FaCheck
            className="icon"
            onClick={() => onComplete(todo.id)}
            title="Mark as done"
          />
          <FaTimes
            className="icon"
            onClick={() => onDelete(todo.id)}
            title="Delete task"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItems;
