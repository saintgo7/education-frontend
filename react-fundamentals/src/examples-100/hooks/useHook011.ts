import { useState, useEffect, useCallback, useRef } from 'react';

export interface UseHook11Options {
  initialValue?: any;
  delay?: number;
  enabled?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export interface UseHook11Return {
  data: any;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
  reset: () => void;
}

/**
 * Custom Hook Example 11
 * 재사용 가능한 로직을 캡슐화하는 커스텀 훅
 */
export function useHook11(options: UseHook11Options = {}): UseHook11Return {
  const {
    initialValue = null,
    delay = 1000,
    enabled = true,
    onSuccess,
    onError,
  } = options;

  const [data, setData] = useState<any>(initialValue);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const isMounted = useRef(true);

  const fetchData = useCallback(async () => {
    if (!enabled) return;

    setLoading(true);
    setError(null);

    try {
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, delay));
      
      const result = { 
        id: 11, 
        value: Math.random(),
        timestamp: Date.now(),
      };

      if (isMounted.current) {
        setData(result);
        onSuccess?.(result);
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      if (isMounted.current) {
        setError(error);
        onError?.(error);
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  }, [enabled, delay, onSuccess, onError]);

  const reset = useCallback(() => {
    setData(initialValue);
    setError(null);
    setLoading(false);
  }, [initialValue]);

  useEffect(() => {
    isMounted.current = true;
    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
    reset,
  };
}

export default useHook11;
