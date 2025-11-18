# Web Performance - 웹 성능 최적화

[![Performance](https://img.shields.io/badge/Performance-Optimized-brightgreen.svg)](https://web.dev/performance/)

> 웹 성능 최적화 기법과 모범 사례

## 🎯 프로젝트 소개

Core Web Vitals, 코드 스플리팅, 이미지 최적화 등을 학습합니다.

### 주요 내용

- ⚡ **Core Web Vitals**: LCP, FID, CLS 최적화
- 🎯 **Code Splitting**: 코드 분할과 Lazy Loading
- 🖼️ **이미지 최적화**: WebP, AVIF, 반응형 이미지
- 💾 **캐싱 전략**: Service Workers, Cache API
- 🔄 **PWA**: Progressive Web App
- 📊 **Monitoring**: Performance API, Web Vitals
- 🎪 **Bundle 최적화**: Tree Shaking, Minification

## 🚀 시작하기

```bash
pnpm install
pnpm dev
pnpm build
pnpm analyze  # 번들 크기 분석
pnpm lighthouse  # Lighthouse 감사
```

## 💡 최적화 기법

### Code Splitting

```tsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### 이미지 최적화

```tsx
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" loading="lazy" />
</picture>
```

### Web Vitals 모니터링

```typescript
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
```

## 📊 성능 메트릭

- **LCP**: Largest Contentful Paint < 2.5s
- **FID**: First Input Delay < 100ms
- **CLS**: Cumulative Layout Shift < 0.1
- **TTFB**: Time to First Byte < 600ms
- **FCP**: First Contentful Paint < 1.8s

## 📄 라이선스

MIT License

---

**Happy Coding! 🚀**
