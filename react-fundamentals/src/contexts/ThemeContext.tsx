import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { Theme } from '@types/index';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider
 *
 * 애플리케이션 전체의 테마를 관리하는 Context Provider입니다.
 * localStorage와 동기화되어 사용자의 테마 선택을 유지합니다.
 *
 * @example
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light');

  // 시스템 다크모드 설정 감지
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setTheme]);

  // HTML 루트 요소에 테마 클래스 적용
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/**
 * useTheme Hook
 *
 * ThemeContext를 사용하기 위한 커스텀 Hook입니다.
 *
 * @throws {Error} ThemeProvider 외부에서 사용시 에러 발생
 * @returns ThemeContext 값
 *
 * @example
 * const { theme, toggleTheme } = useTheme();
 *
 * <div className={theme}>
 *   <button onClick={toggleTheme}>테마 전환</button>
 * </div>
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
