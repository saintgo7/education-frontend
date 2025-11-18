import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * AsyncStorage를 쉽게 사용하기 위한 커스텀 훅
 *
 * @example
 * ```tsx
 * const [user, setUser, loading] = useAsyncStorage<User>('user', null);
 * ```
 */

export function useAsyncStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => Promise<void>, boolean, Error | null] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // 초기 값 로드
  useEffect(() => {
    loadStoredValue();
  }, [key]);

  const loadStoredValue = async () => {
    try {
      setLoading(true);
      const item = await AsyncStorage.getItem(key);
      if (item !== null) {
        setStoredValue(JSON.parse(item));
      }
    } catch (err) {
      setError(err as Error);
      console.error('Error loading from AsyncStorage:', err);
    } finally {
      setLoading(false);
    }
  };

  // 값 저장
  const setValue = useCallback(
    async (value: T) => {
      try {
        setStoredValue(value);
        await AsyncStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        setError(err as Error);
        console.error('Error saving to AsyncStorage:', err);
      }
    },
    [key]
  );

  return [storedValue, setValue, loading, error];
}
