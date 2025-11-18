import { useState, useEffect } from 'react';

/**
 * useLocalStorage Hook
 *
 * localStorage와 동기화되는 상태를 관리합니다.
 * 상태가 변경되면 자동으로 localStorage에 저장됩니다.
 *
 * @param key - localStorage 키
 * @param initialValue - 초기값
 * @returns [저장된 값, 값 설정 함수]
 *
 * @example
 * const [theme, setTheme] = useLocalStorage('theme', 'light');
 *
 * // 테마 변경 시 자동으로 localStorage에 저장됨
 * setTheme('dark');
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // localStorage에서 초기값 가져오기
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(`Error loading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // 값 설정 함수
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // 함수형 업데이트 지원
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // 상태 업데이트
      setStoredValue(valueToStore);

      // localStorage에 저장
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // 다른 탭/창에서 변경사항 감지
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        try {
          setStoredValue(JSON.parse(e.newValue) as T);
        } catch (error) {
          console.error('Error parsing storage event:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue];
}
