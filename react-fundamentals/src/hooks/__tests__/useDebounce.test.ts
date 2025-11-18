import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '../useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should return initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('test', 500));
    expect(result.current).toBe('test');
  });

  it('should debounce value changes', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      }
    );

    expect(result.current).toBe('initial');

    // Change value
    rerender({ value: 'changed', delay: 500 });

    // Value should not change immediately
    expect(result.current).toBe('initial');

    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Value should now be updated
    expect(result.current).toBe('changed');
  });

  it('should cancel previous debounce on rapid changes', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 'initial' },
      }
    );

    // Make rapid changes
    rerender({ value: 'change1' });
    act(() => {
      jest.advanceTimersByTime(200);
    });

    rerender({ value: 'change2' });
    act(() => {
      jest.advanceTimersByTime(200);
    });

    rerender({ value: 'final' });

    // Value should still be initial
    expect(result.current).toBe('initial');

    // Complete the debounce
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Value should be the final one
    expect(result.current).toBe('final');
  });
});
