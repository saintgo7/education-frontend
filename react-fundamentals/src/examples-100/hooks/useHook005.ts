import { useState, useEffect, useCallback, useRef } from 'react';

export interface UseHook5Options {
  initialValue?: any;
  delay?: number;
  enabled?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export interface UseHook5Return {
  data: any;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
  reset: () => void;
}

/**
 * Custom Hook Example 5
 * 재사용 가능한 로직을 캡슐화하는 커스텀 훅
 */
export function useHook5(options: UseHook5Options = {}): UseHook5Return {
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
        id: 5, 
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

export default useHook5;
