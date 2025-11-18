import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@contexts/ThemeContext';
import './index.css';

/**
 * 애플리케이션 엔트리 포인트
 *
 * - React 18의 createRoot API 사용
 * - BrowserRouter로 라우팅 기능 제공
 * - ThemeProvider로 전역 테마 관리
 * - StrictMode로 개발 중 잠재적 문제 감지
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
