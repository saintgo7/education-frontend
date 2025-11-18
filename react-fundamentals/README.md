# React Fundamentals - React 기초 완전 정복

[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)](https://vitejs.dev/)

> React의 핵심 개념부터 실전 활용까지 - Hooks, Context API, React Router를 활용한 완전한 학습 프로젝트

## 📚 목차

- [프로젝트 소개](#프로젝트-소개)
- [학습 목표](#학습-목표)
- [기술 스택](#기술-스택)
- [시작하기](#시작하기)
- [프로젝트 구조](#프로젝트-구조)
- [핵심 개념](#핵심-개념)
- [컴포넌트 가이드](#컴포넌트-가이드)
- [테스트](#테스트)

## 🎯 프로젝트 소개

이 프로젝트는 React의 핵심 개념을 실전 예제와 함께 학습할 수 있도록 설계된 종합 교육 자료입니다.
간단한 할 일 관리 앱부터 복잡한 상태 관리까지, React 개발의 모든 것을 다룹니다.

### 주요 기능

- ✅ **할 일 관리**: CRUD 작업과 필터링
- 👤 **사용자 프로필**: Context API를 활용한 전역 상태
- 🔍 **검색 및 필터**: 실시간 검색과 디바운싱
- 📊 **대시보드**: 차트와 통계
- 🌙 **다크 모드**: Theme Context 활용
- 💾 **로컬 스토리지**: 데이터 영속성
- 🎨 **반응형 디자인**: 모바일 퍼스트 접근

## 🎓 학습 목표

이 프로젝트를 완료하면 다음을 할 수 있습니다:

### 1. React Hooks 마스터
- `useState`: 컴포넌트 상태 관리
- `useEffect`: 사이드 이펙트 처리
- `useContext`: Context API 활용
- `useReducer`: 복잡한 상태 로직
- `useMemo`: 연산 최적화
- `useCallback`: 함수 메모이제이션
- `useRef`: DOM 참조와 값 유지

### 2. Context API
- Context 생성과 Provider 설정
- 여러 Context 조합하기
- Context 최적화 기법

### 3. React Router
- 페이지 라우팅 구현
- 동적 라우트 매개변수
- 중첩 라우트
- 프로그래매틱 네비게이션
- Protected Routes

### 4. 성능 최적화
- React.memo를 통한 리렌더링 방지
- 코드 스플리팅
- Lazy Loading
- 이미지 최적화

### 5. 모범 사례
- 컴포넌트 설계 패턴
- 폴더 구조 조직화
- 타입 안정성 (TypeScript)
- 테스트 작성

## 🛠️ 기술 스택

### 핵심 라이브러리
- **React 18.2**: 최신 React 기능 (Concurrent Features)
- **TypeScript 5.3**: 타입 안정성
- **React Router 6**: 클라이언트 사이드 라우팅
- **Zustand**: 경량 상태 관리 (Context API 대안)

### 개발 도구
- **Vite**: 빠른 개발 서버와 빌드
- **Jest**: 단위 테스트
- **React Testing Library**: 컴포넌트 테스트
- **ESLint & Prettier**: 코드 품질

### 유틸리티
- **date-fns**: 날짜 처리
- **axios**: HTTP 클라이언트
- **clsx**: 조건부 클래스명

## 🚀 시작하기

### 필수 요구사항

- Node.js >= 18.0.0
- pnpm >= 8.0.0 (또는 npm/yarn)

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 시작 (http://localhost:5173)
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드 미리보기
pnpm preview

# 테스트 실행
pnpm test

# 커버리지 포함 테스트
pnpm test:coverage

# 린트 검사
pnpm lint

# 코드 포맷팅
pnpm format
```

### Docker로 실행

```bash
# 이미지 빌드
docker build -t react-fundamentals .

# 컨테이너 실행
docker run -p 5173:5173 react-fundamentals

# Docker Compose 사용
docker-compose up
```

## 📁 프로젝트 구조

```
react-fundamentals/
├── src/
│   ├── components/           # 재사용 가능한 컴포넌트
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── Button.module.css
│   │   ├── Input/
│   │   ├── Card/
│   │   └── Modal/
│   ├── pages/                # 페이지 컴포넌트
│   │   ├── Home/
│   │   ├── TodoList/
│   │   ├── Dashboard/
│   │   └── Profile/
│   ├── contexts/             # Context API
│   │   ├── ThemeContext.tsx
│   │   ├── AuthContext.tsx
│   │   └── TodoContext.tsx
│   ├── hooks/                # Custom Hooks
│   │   ├── useDebounce.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useFetch.ts
│   │   └── useToggle.ts
│   ├── store/                # Zustand Store
│   │   ├── todoStore.ts
│   │   └── userStore.ts
│   ├── utils/                # 유틸리티 함수
│   │   ├── helpers.ts
│   │   └── constants.ts
│   ├── types/                # TypeScript 타입
│   │   └── index.ts
│   ├── data/                 # Mock 데이터
│   │   └── mockData.ts
│   ├── App.tsx               # 루트 컴포넌트
│   ├── main.tsx              # 엔트리 포인트
│   └── router.tsx            # 라우터 설정
├── public/                   # 정적 파일
├── tests/                    # 테스트 설정
│   └── setup.ts
├── .eslintrc.json           # ESLint 설정
├── .prettierrc              # Prettier 설정
├── tsconfig.json            # TypeScript 설정
├── vite.config.ts           # Vite 설정
├── jest.config.js           # Jest 설정
├── Dockerfile               # Docker 설정
├── docker-compose.yml       # Docker Compose
└── README.md
```

## 💡 핵심 개념

### 1. useState - 상태 관리의 기본

```tsx
import { useState } from 'react';

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
}
```

**핵심 포인트:**
- 컴포넌트의 로컬 상태를 관리
- 상태가 변경되면 컴포넌트가 리렌더링됨
- 초기값을 함수로 전달하여 지연 초기화 가능

### 2. useEffect - 사이드 이펙트 처리

```tsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // API 호출
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));

    // 클린업 함수
    return () => {
      // 구독 해제, 타이머 정리 등
    };
  }, [userId]); // 의존성 배열

  return <div>{user?.name}</div>;
}
```

**핵심 포인트:**
- 컴포넌트가 렌더링된 후 실행
- 의존성 배열로 실행 조건 제어
- 클린업 함수로 리소스 정리

### 3. useContext - 전역 상태 공유

```tsx
import { createContext, useContext, useState } from 'react';

// Context 생성
const ThemeContext = createContext<{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
} | undefined>(undefined);

// Provider 컴포넌트
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// 사용 예시
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={theme}>
      <button onClick={toggleTheme}>
        테마 전환
      </button>
    </header>
  );
}
```

**핵심 포인트:**
- Props Drilling 없이 데이터 전달
- Context는 자주 변경되지 않는 데이터에 적합
- Custom Hook으로 사용성 향상

### 4. useReducer - 복잡한 상태 로직

```tsx
import { useReducer } from 'react';

type State = {
  count: number;
  step: number;
};

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'setStep'; payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <input
        type="number"
        value={state.step}
        onChange={(e) => dispatch({
          type: 'setStep',
          payload: Number(e.target.value)
        })}
      />
    </div>
  );
}
```

**핵심 포인트:**
- 여러 상태를 관련된 로직으로 그룹화
- 상태 업데이트 로직을 컴포넌트 외부로 분리
- Redux와 유사한 패턴

### 5. useMemo & useCallback - 성능 최적화

```tsx
import { useState, useMemo, useCallback } from 'react';

function ExpensiveComponent({ items }: { items: number[] }) {
  const [filter, setFilter] = useState('');

  // 비용이 큰 연산 메모이제이션
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item =>
      item.toString().includes(filter)
    );
  }, [items, filter]);

  // 함수 메모이제이션
  const handleFilter = useCallback((value: string) => {
    setFilter(value);
  }, []);

  return (
    <div>
      <input onChange={(e) => handleFilter(e.target.value)} />
      <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

**핵심 포인트:**
- `useMemo`: 값을 메모이제이션
- `useCallback`: 함수를 메모이제이션
- 의존성이 변경되지 않으면 이전 값 재사용

### 6. Custom Hooks - 로직 재사용

```tsx
import { useState, useEffect } from 'react';

// useDebounce Hook
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// useLocalStorage Hook
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// 사용 예시
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [history, setHistory] = useLocalStorage('searchHistory', []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // API 호출
      console.log('Searching for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="검색..."
    />
  );
}
```

**핵심 포인트:**
- 반복되는 로직을 재사용 가능한 Hook으로 추출
- Hook의 규칙 준수 (함수 컴포넌트 최상위에서 호출)
- 명확한 네이밍 (use로 시작)

## 🧩 컴포넌트 가이드

### Button 컴포넌트

위치: `src/components/Button/Button.tsx`

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  onClick,
}: ButtonProps) {
  // 구현...
}
```

**사용 예시:**
```tsx
<Button variant="primary" onClick={handleClick}>
  클릭하세요
</Button>
```

### Input 컴포넌트

위치: `src/components/Input/Input.tsx`

제어 컴포넌트와 비제어 컴포넌트 패턴 모두 지원

### Modal 컴포넌트

위치: `src/components/Modal/Modal.tsx`

포털(Portal)을 활용한 모달 구현

## 🧪 테스트

### 단위 테스트 예시

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });
});
```

### 테스트 실행

```bash
# 모든 테스트 실행
pnpm test

# Watch 모드
pnpm test:watch

# 커버리지 리포트
pnpm test:coverage
```

## 📚 추가 학습 자료

### 공식 문서
- [React 공식 문서](https://react.dev/)
- [React Router 문서](https://reactrouter.com/)
- [TypeScript 문서](https://www.typescriptlang.org/)

### 추천 글
- [React Hooks 완벽 가이드](https://react.dev/reference/react)
- [React 성능 최적화](https://react.dev/learn/render-and-commit)

## 🤝 기여하기

개선 사항이나 버그를 발견하면 Issue나 Pull Request를 생성해주세요!

## 📄 라이선스

MIT License - 자유롭게 사용하세요.

---

**Happy Coding! 즐거운 코딩 되세요! 🚀**
