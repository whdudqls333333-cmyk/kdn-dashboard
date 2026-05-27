import { memo } from 'react';
import type { Todo } from '../types';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = memo(({ todo, onToggle, onDelete }: Props) => {
  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        <span className="todo-text">{todo.text}</span>
      </label>
      <button
        className="delete-btn"
        onClick={() => onDelete(todo.id)}
        aria-label="삭제"
      >
        ✕
      </button>
    </li>
  );
});

TodoItem.displayName = 'TodoItem';

export default TodoItem;
