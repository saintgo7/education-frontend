import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * 데이터 페칭을 위한 커스텀 훅
 *
 * 로딩 상태, 에러 처리, 재시도 기능 포함
 *
 * @example
 * ```tsx
 * const { data, loading, error, refetch } = useFetch<User[]>('/api/users');
 * ```
 */

interface UseFetchOptions<T> {
  initialData?: T;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  retry?: number;
  retryDelay?: number;
}

interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useFetch<T = unknown>(
  url: string,
  options: UseFetchOptions<T> = {}
): UseFetchReturn<T> {
  const {
    initialData = null,
    onSuccess,
    onError,
    retry = 0,
    retryDelay = 1000,
  } = options;

  const [data, setData] = useState<T | null>(initialData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const retryCountRef = useRef(0);
  const isMountedRef = useRef(true);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      if (isMountedRef.current) {
        setData(json);
        onSuccess?.(json);
        retryCountRef.current = 0;
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error('An error occurred');

      if (isMountedRef.current) {
        // 재시도 로직
        if (retryCountRef.current < retry) {
          retryCountRef.current += 1;
          setTimeout(() => {
            fetchData();
          }, retryDelay * retryCountRef.current);
          return;
        }

        setError(error);
        onError?.(error);
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [url, onSuccess, onError, retry, retryDelay]);

  useEffect(() => {
    isMountedRef.current = true;
    fetchData();

    return () => {
      isMountedRef.current = false;
    };
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

// 사용 예제
export interface User {
  id: number;
  name: string;
  email: string;
}

export const UseFetchExample: React.FC = () => {
  const {
    data: users,
    loading,
    error,
    refetch,
  } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users', {
    onSuccess: (data) => console.log('Fetched users:', data),
    onError: (err) => console.error('Error fetching users:', err),
    retry: 3,
    retryDelay: 1000,
  });

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-4">
        <p className="text-red-600">Error: {error.message}</p>
        <button
          onClick={refetch}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Users</h2>
        <button
          onClick={refetch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refetch
        </button>
      </div>
      <ul className="space-y-2">
        {users?.map((user) => (
          <li key={user.id} className="p-3 border rounded">
            <div className="font-semibold">{user.name}</div>
            <div className="text-sm text-gray-600">{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
