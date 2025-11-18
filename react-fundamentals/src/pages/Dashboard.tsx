import { useState, useEffect } from 'react';
import { mockTodos, mockUser } from '@/data/mockData';

/**
 * Dashboard 페이지
 *
 * useEffect를 활용한 데이터 로딩과 통계 대시보드입니다.
 * - useEffect로 데이터 페칭 시뮬레이션
 * - 통계 계산 및 시각화
 * - 사용자 프로필 표시
 */
export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(mockUser);
  const [todos, setTodos] = useState(mockTodos);

  // 데이터 로딩 시뮬레이션
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // 문서 타이틀 업데이트
  useEffect(() => {
    document.title = `대시보드 - ${user.name}`;

    return () => {
      document.title = 'React Fundamentals';
    };
  }, [user.name]);

  if (loading) {
    return (
      <div className="page dashboard-page">
        <div className="loading-spinner">로딩 중...</div>
      </div>
    );
  }

  // 통계 계산
  const totalTodos = todos.length;
  const completedTodos = todos.filter((t) => t.completed).length;
  const activeTodos = totalTodos - completedTodos;
  const completionRate =
    totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

  // 우선순위별 통계
  const highPriority = todos.filter((t) => t.priority === 'high').length;
  const mediumPriority = todos.filter((t) => t.priority === 'medium').length;
  const lowPriority = todos.filter((t) => t.priority === 'low').length;

  // 최근 활동
  const recentTodos = [...todos]
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
    .slice(0, 5);

  return (
    <div className="page dashboard-page">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <div>
            <h1>대시보드</h1>
            <p>안녕하세요, {user.name}님! 👋</p>
          </div>

          <div className="user-profile">
            {user.avatar && (
              <img
                src={user.avatar}
                alt={user.name}
                className="user-avatar"
              />
            )}
            <div>
              <div className="user-name">{user.name}</div>
              <div className="user-email">{user.email}</div>
            </div>
          </div>
        </header>

        {/* 통계 카드 */}
        <div className="stats-grid">
          <div className="stat-card primary">
            <div className="stat-icon">📝</div>
            <div className="stat-content">
              <div className="stat-value">{totalTodos}</div>
              <div className="stat-label">전체 할 일</div>
            </div>
          </div>

          <div className="stat-card success">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <div className="stat-value">{completedTodos}</div>
              <div className="stat-label">완료</div>
            </div>
          </div>

          <div className="stat-card warning">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <div className="stat-value">{activeTodos}</div>
              <div className="stat-label">진행중</div>
            </div>
          </div>

          <div className="stat-card info">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <div className="stat-value">{completionRate}%</div>
              <div className="stat-label">완료율</div>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          {/* 우선순위 분포 */}
          <div className="dashboard-card">
            <h2>우선순위 분포</h2>
            <div className="priority-chart">
              <div className="priority-item">
                <span className="priority-label high">높음</span>
                <div className="priority-bar-container">
                  <div
                    className="priority-bar high"
                    style={{
                      width: `${totalTodos > 0 ? (highPriority / totalTodos) * 100 : 0}%`,
                    }}
                  />
                </div>
                <span className="priority-count">{highPriority}</span>
              </div>

              <div className="priority-item">
                <span className="priority-label medium">보통</span>
                <div className="priority-bar-container">
                  <div
                    className="priority-bar medium"
                    style={{
                      width: `${totalTodos > 0 ? (mediumPriority / totalTodos) * 100 : 0}%`,
                    }}
                  />
                </div>
                <span className="priority-count">{mediumPriority}</span>
              </div>

              <div className="priority-item">
                <span className="priority-label low">낮음</span>
                <div className="priority-bar-container">
                  <div
                    className="priority-bar low"
                    style={{
                      width: `${totalTodos > 0 ? (lowPriority / totalTodos) * 100 : 0}%`,
                    }}
                  />
                </div>
                <span className="priority-count">{lowPriority}</span>
              </div>
            </div>
          </div>

          {/* 최근 활동 */}
          <div className="dashboard-card">
            <h2>최근 활동</h2>
            <div className="recent-activity">
              {recentTodos.map((todo) => (
                <div key={todo.id} className="activity-item">
                  <div className="activity-icon">
                    {todo.completed ? '✅' : '⏳'}
                  </div>
                  <div className="activity-content">
                    <div className="activity-title">{todo.title}</div>
                    <div className="activity-time">
                      {new Date(todo.updatedAt).toLocaleString('ko-KR')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 진행률 */}
          <div className="dashboard-card">
            <h2>전체 진행률</h2>
            <div className="progress-container">
              <div className="progress-circle">
                <svg viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e0e0e0"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#4caf50"
                    strokeWidth="10"
                    strokeDasharray={`${completionRate * 2.827}, 282.7`}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="progress-text">{completionRate}%</div>
              </div>
              <p className="progress-label">
                {completedTodos}개 완료 / {totalTodos}개 중
              </p>
            </div>
          </div>

          {/* 팁 */}
          <div className="dashboard-card tips">
            <h2>💡 오늘의 팁</h2>
            <ul>
              <li>
                <strong>useState</strong>는 컴포넌트의 로컬 상태를 관리합니다.
              </li>
              <li>
                <strong>useEffect</strong>로 사이드 이펙트를 처리하세요.
              </li>
              <li>
                <strong>useMemo</strong>로 비용이 큰 연산을 최적화하세요.
              </li>
              <li>
                <strong>useCallback</strong>으로 함수를 메모이제이션하세요.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
