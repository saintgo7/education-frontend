import { useState, useEffect } from 'react';

/**
 * useDebounce Hook
 *
 * 값이 변경될 때 일정 시간(delay) 동안 변경이 없을 때만 업데이트됩니다.
 * 검색창, 자동완성 등에서 API 호출 최적화에 유용합니다.
 *
 * @param value - 디바운스할 값
 * @param delay - 지연 시간 (밀리초)
 * @returns 디바운스된 값
 *
 * @example
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearchTerm = useDebounce(searchTerm, 500);
 *
 * useEffect(() => {
 *   if (debouncedSearchTerm) {
 *     // API 호출
 *     searchAPI(debouncedSearchTerm);
 *   }
 * }, [debouncedSearchTerm]);
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // delay 후에 값을 업데이트하는 타이머 설정
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 클린업: 값이 변경되면 이전 타이머를 취소
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
