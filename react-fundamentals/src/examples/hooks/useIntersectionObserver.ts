import { useEffect, useRef, useState, RefObject } from 'react';

/**
 * Intersection Observer API를 사용하는 커스텀 훅
 *
 * 요소의 가시성을 감지하여 무한 스크롤, 이미지 지연 로딩 등에 활용
 *
 * @example
 * ```tsx
 * const ref = useRef(null);
 * const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });
 * ```
 */

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  }: UseIntersectionObserverOptions = {}
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // 이미 visible이고 freeze 옵션이 켜져있으면 observer 생성 안 함
    if (freezeOnceVisible && isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible, isVisible]);

  return isVisible;
}

// 무한 스크롤 예제
export const InfiniteScrollExample: React.FC = () => {
  const [items, setItems] = useState<number[]>(Array.from({ length: 20 }, (_, i) => i));
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const isLoaderVisible = useIntersectionObserver(loaderRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (isLoaderVisible && !loading) {
      loadMore();
    }
  }, [isLoaderVisible]);

  const loadMore = async () => {
    setLoading(true);
    // 새 데이터 로딩 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1000));
    setItems(prev => [
      ...prev,
      ...Array.from({ length: 10 }, (_, i) => prev.length + i),
    ]);
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Infinite Scroll Example</h2>
      <div className="space-y-2">
        {items.map(item => (
          <div key={item} className="p-4 border rounded bg-white">
            Item {item + 1}
          </div>
        ))}
      </div>
      <div
        ref={loaderRef}
        className="p-4 text-center"
      >
        {loading ? (
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent" />
        ) : (
          <p className="text-gray-500">Scroll to load more...</p>
        )}
      </div>
    </div>
  );
};

// 이미지 지연 로딩 예제
export const LazyImageExample: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const isVisible = useIntersectionObserver(imgRef, {
    threshold: 0.1,
    rootMargin: '100px',
    freezeOnceVisible: true,
  });

  return (
    <div className="relative w-full h-64 bg-gray-200 rounded overflow-hidden">
      <img
        ref={imgRef}
        src={isVisible ? src : undefined}
        alt={alt}
        className={`
          w-full h-full object-cover transition-opacity duration-500
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
        loading="lazy"
      />
      {!isVisible && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-500" />
        </div>
      )}
    </div>
  );
};
