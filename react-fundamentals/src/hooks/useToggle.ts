import { useState, useCallback } from 'react';

/**
 * useToggle Hook
 *
 * boolean 상태를 토글하는 Hook입니다.
 * 모달, 드롭다운, 사이드바 등 on/off 상태 관리에 유용합니다.
 *
 * @param initialValue - 초기 boolean 값 (기본값: false)
 * @returns [현재 값, 토글 함수, 값 설정 함수]
 *
 * @example
 * const [isOpen, toggle, setIsOpen] = useToggle();
 *
 * <button onClick={toggle}>토글</button>
 * <button onClick={() => setIsOpen(true)}>열기</button>
 * <button onClick={() => setIsOpen(false)}>닫기</button>
 */
export function useToggle(
  initialValue = false
): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(initialValue);

  // 토글 함수 (메모이제이션)
  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle, setValue];
}
