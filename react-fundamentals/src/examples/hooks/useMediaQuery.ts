import { useState, useEffect } from 'react';

/**
 * 미디어 쿼리를 감지하는 커스텀 훅
 *
 * 반응형 디자인을 위한 브레이크포인트 감지
 *
 * @example
 * ```tsx
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * const isDark = useMediaQuery('(prefers-color-scheme: dark)');
 * ```
 */

export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // SSR 방지
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // 초기 값 설정
    setMatches(matchMedia.matches);

    // 이벤트 핸들러
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // 이벤트 리스너 등록
    // Safari < 14에서는 addEventListener가 지원되지 않음
    if (matchMedia.addEventListener) {
      matchMedia.addEventListener('change', handleChange);
    } else {
      // 구형 브라우저 지원
      matchMedia.addListener(handleChange);
    }

    // 클린업
    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener('change', handleChange);
      } else {
        matchMedia.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
}

// 반응형 브레이크포인트 훅
export function useBreakpoint() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  return {
    isMobile,
    isTablet,
    isDesktop,
    device: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop',
  };
}

// 다크 모드 감지 훅
export function useDarkMode() {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDark, setIsDark] = useState(prefersDark);

  useEffect(() => {
    setIsDark(prefersDark);
  }, [prefersDark]);

  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

  return { isDark, toggleDarkMode, prefersDark };
}

// 사용 예제
export const MediaQueryExample: React.FC = () => {
  const { isMobile, isTablet, isDesktop, device } = useBreakpoint();
  const { isDark, toggleDarkMode, prefersDark } = useDarkMode();
  const isLandscape = useMediaQuery('(orientation: landscape)');
  const isRetina = useMediaQuery('(min-resolution: 2dppx)');

  return (
    <div className={`p-6 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h2 className="text-2xl font-bold mb-6">Media Query Examples</h2>

      <div className="space-y-4">
        {/* Device Detection */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Device Detection</h3>
          <div className="space-y-1 text-sm">
            <p>Current Device: <span className="font-mono font-bold">{device}</span></p>
            <p>Mobile: {isMobile ? '✅' : '❌'}</p>
            <p>Tablet: {isTablet ? '✅' : '❌'}</p>
            <p>Desktop: {isDesktop ? '✅' : '❌'}</p>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Dark Mode</h3>
          <div className="space-y-2">
            <p className="text-sm">
              System Preference: {prefersDark ? 'Dark' : 'Light'}
            </p>
            <p className="text-sm">
              Current Mode: {isDark ? 'Dark' : 'Light'}
            </p>
            <button
              onClick={toggleDarkMode}
              className={`
                px-4 py-2 rounded font-medium
                ${isDark
                  ? 'bg-white text-gray-900'
                  : 'bg-gray-900 text-white'
                }
              `}
            >
              Toggle Dark Mode
            </button>
          </div>
        </div>

        {/* Other Queries */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Other Queries</h3>
          <div className="space-y-1 text-sm">
            <p>Orientation: {isLandscape ? 'Landscape' : 'Portrait'}</p>
            <p>Retina Display: {isRetina ? 'Yes' : 'No'}</p>
          </div>
        </div>

        {/* Responsive Component */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Responsive Component</h3>
          <div className={`
            grid gap-4
            ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'}
          `}>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded text-center">
              Box 1
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded text-center">
              Box 2
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded text-center">
              Box 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
