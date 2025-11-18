import { Link } from 'react-router-dom';
import { useTheme } from '@contexts/ThemeContext';

/**
 * Home 페이지
 *
 * 애플리케이션의 랜딩 페이지입니다.
 * 프로젝트 소개와 주요 기능을 안내합니다.
 */
export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="page home-page">
      <div className="hero">
        <h1 className="hero-title">React Fundamentals</h1>
        <p className="hero-subtitle">
          React의 핵심 개념을 실전 예제로 배우세요
        </p>

        <div className="hero-features">
          <div className="feature-card">
            <div className="feature-icon">🎣</div>
            <h3>React Hooks</h3>
            <p>useState, useEffect, useContext 등 모든 Hooks 마스터</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🗂️</div>
            <h3>상태 관리</h3>
            <p>Context API와 Zustand를 활용한 전역 상태 관리</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛣️</div>
            <h3>라우팅</h3>
            <p>React Router v6로 SPA 네비게이션 구현</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>성능 최적화</h3>
            <p>메모이제이션과 코드 스플리팅으로 최적화</p>
          </div>
        </div>

        <div className="hero-actions">
          <Link to="/todos" className="btn btn-primary">
            할 일 목록 시작하기
          </Link>
          <Link to="/dashboard" className="btn btn-secondary">
            대시보드 보기
          </Link>
        </div>
      </div>

      <section className="learning-path">
        <h2>학습 경로</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>기본 개념</h3>
            <p>컴포넌트, Props, State의 기초를 이해합니다.</p>
          </div>

          <div className="step">
            <span className="step-number">2</span>
            <h3>Hooks 마스터</h3>
            <p>React Hooks를 활용한 함수형 컴포넌트 개발</p>
          </div>

          <div className="step">
            <span className="step-number">3</span>
            <h3>상태 관리</h3>
            <p>Context API와 전역 상태 관리 패턴</p>
          </div>

          <div className="step">
            <span className="step-number">4</span>
            <h3>실전 프로젝트</h3>
            <p>완전한 기능을 가진 애플리케이션 구축</p>
          </div>
        </div>
      </section>

      <section className="code-example">
        <h2>간단한 예제</h2>
        <pre>
          <code>{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
    </div>
  );
}`}</code>
        </pre>
      </section>

      <section className="resources">
        <h2>학습 자료</h2>
        <ul>
          <li>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React 공식 문서
            </a>
          </li>
          <li>
            <a
              href="https://reactrouter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Router 문서
            </a>
          </li>
          <li>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript 문서
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
