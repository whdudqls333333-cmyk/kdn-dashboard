import { useState, useMemo, useCallback } from 'react';
import type { KeyboardEvent } from 'react';
import TodoItem from './components/TodoItem';
import type { Todo, FilterType } from './types';
import './App.css';

const STORAGE_KEY = 'todos';

function loadTodos(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Todo[]) : [];
  } catch {
    return [];
  }
}

function saveTodos(todos: Todo[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

const FILTER_LABELS: Record<FilterType, string> = {
  all: '전체',
  active: '진행중',
  completed: '완료',
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(loadTodos);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');

  const updateTodos = useCallback((next: Todo[]) => {
    setTodos(next);
    saveTodos(next);
  }, []);

  const addTodo = useCallback(() => {
    const text = input.trim();
    if (!text) return;
    const next: Todo[] = [
      ...todos,
      { id: crypto.randomUUID(), text, completed: false, createdAt: Date.now() },
    ];
    updateTodos(next);
    setInput('');
  }, [input, todos, updateTodos]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTodo();
  };

  const toggleTodo = useCallback(
    (id: string) => updateTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))),
    [todos, updateTodos],
  );

  const deleteTodo = useCallback(
    (id: string) => updateTodos(todos.filter((t) => t.id !== id)),
    [todos, updateTodos],
  );

  const filtered = useMemo(() => {
    if (filter === 'active') return todos.filter((t) => !t.completed);
    if (filter === 'completed') return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const activeCount = useMemo(() => todos.filter((t) => !t.completed).length, [todos]);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">할 일 목록</h1>
        <p className="app-subtitle">
          {activeCount > 0 ? `${activeCount}개 남음` : todos.length > 0 ? '모두 완료!' : '할 일을 추가해보세요'}
        </p>
      </header>

      <section className="input-section">
        <input
          className="todo-input"
          type="text"
          placeholder="새 할 일을 입력하세요..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          maxLength={100}
        />
        <button className="add-btn" onClick={addTodo} disabled={!input.trim()}>
          추가
        </button>
      </section>

      <nav className="filter-tabs">
        {(Object.keys(FILTER_LABELS) as FilterType[]).map((f) => (
          <button
            key={f}
            className={`filter-tab${filter === f ? ' active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {FILTER_LABELS[f]}
          </button>
        ))}
      </nav>

      <ul className="todo-list">
        {filtered.length === 0 ? (
          <li className="empty-state">
            {filter === 'completed' ? '완료된 항목이 없습니다.' : '할 일이 없습니다.'}
          </li>
        ) : (
          filtered.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
          ))
        )}
      </ul>
    </div>
  );
}
