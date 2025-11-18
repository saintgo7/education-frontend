import { useRef, useEffect } from 'react';

/**
 * 이전 값을 추적하는 훅
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
