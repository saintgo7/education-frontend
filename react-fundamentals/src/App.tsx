import { Routes, Route, Link } from 'react-router-dom';
import { useTheme } from '@contexts/ThemeContext';
import './App.css';

// Lazy load pages for code splitting
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const TodoList = lazy(() => import('./pages/TodoList'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

/**
 * App 컴포넌트
 *
 * 애플리케이션의 루트 컴포넌트입니다.
 * - 라우팅 설정
 * - 네비게이션 바
 * - 테마 전환 기능
 * - Lazy loading과 Suspense를 통한 코드 스플리팅
 */
function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            React Fundamentals
          </Link>

          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                홈
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todos" className="nav-link">
                할 일 목록
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                대시보드
              </Link>
            </li>
          </ul>

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="테마 전환"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>

      <main className="main-content">
        <Suspense fallback={<div className="loading">로딩 중...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoList />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="footer">
        <p>&copy; 2024 React Fundamentals. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
