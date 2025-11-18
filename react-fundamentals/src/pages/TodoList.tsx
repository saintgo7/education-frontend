import { useState, useMemo } from 'react';
import { mockTodos } from '@/data/mockData';
import { Todo, TodoFilter } from '@types/index';
import { useDebounce } from '@hooks/useDebounce';

/**
 * TodoList 페이지
 *
 * React Hooks를 활용한 할 일 관리 애플리케이션입니다.
 * - useState로 상태 관리
 * - useMemo로 필터링 최적화
 * - useDebounce로 검색 최적화
 */
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  const [filter, setFilter] = useState<TodoFilter>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [newTodoTitle, setNewTodoTitle] = useState('');

  // 검색어 디바운싱
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // 필터링된 할 일 목록 (메모이제이션)
  const filteredTodos = useMemo(() => {
    let filtered = todos;

    // 완료 상태 필터
    if (filter === 'active') {
      filtered = filtered.filter((todo) => !todo.completed);
    } else if (filter === 'completed') {
      filtered = filtered.filter((todo) => todo.completed);
    }

    // 검색어 필터
    if (debouncedSearchTerm) {
      filtered = filtered.filter(
        (todo) =>
          todo.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
          todo.description
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [todos, filter, debouncedSearchTerm]);

  // 통계
  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((t) => t.completed).length;
    const active = total - completed;

    return { total, completed, active };
  }, [todos]);

  // 할 일 추가
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTodoTitle.trim()) return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      title: newTodoTitle,
      description: '',
      completed: false,
      priority: 'medium',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setTodos([newTodo, ...todos]);
    setNewTodoTitle('');
  };

  // 할 일 토글
  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
          : todo
      )
    );
  };

  // 할 일 삭제
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 완료된 할 일 모두 삭제
  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="page todo-page">
      <div className="todo-container">
        <header className="todo-header">
          <h1>할 일 관리</h1>

          {/* 통계 */}
          <div className="todo-stats">
            <span className="stat">
              전체: <strong>{stats.total}</strong>
            </span>
            <span className="stat">
              진행중: <strong>{stats.active}</strong>
            </span>
            <span className="stat">
              완료: <strong>{stats.completed}</strong>
            </span>
          </div>
        </header>

        {/* 할 일 추가 폼 */}
        <form onSubmit={handleAddTodo} className="todo-form">
          <input
            type="text"
            placeholder="새로운 할 일을 입력하세요..."
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            className="todo-input"
          />
          <button type="submit" className="btn btn-primary">
            추가
          </button>
        </form>

        {/* 검색 및 필터 */}
        <div className="todo-controls">
          <input
            type="text"
            placeholder="검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="filter-buttons">
            <button
              className={`btn-filter ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              전체
            </button>
            <button
              className={`btn-filter ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
            >
              진행중
            </button>
            <button
              className={`btn-filter ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              완료
            </button>
          </div>

          {stats.completed > 0 && (
            <button onClick={handleClearCompleted} className="btn btn-danger">
              완료된 항목 삭제
            </button>
          )}
        </div>

        {/* 할 일 목록 */}
        <div className="todo-list">
          {filteredTodos.length === 0 ? (
            <div className="empty-state">
              <p>😊 할 일이 없습니다!</p>
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className={`todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}`}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="todo-checkbox"
                />

                <div className="todo-content">
                  <h3 className="todo-title">{todo.title}</h3>
                  {todo.description && (
                    <p className="todo-description">{todo.description}</p>
                  )}
                  <div className="todo-meta">
                    <span className={`priority-badge ${todo.priority}`}>
                      {todo.priority === 'high' && '🔴 높음'}
                      {todo.priority === 'medium' && '🟡 보통'}
                      {todo.priority === 'low' && '🟢 낮음'}
                    </span>
                    <span className="todo-date">
                      {new Date(todo.createdAt).toLocaleDateString('ko-KR')}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="btn-delete"
                  aria-label="삭제"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
