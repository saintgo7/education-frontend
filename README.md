# 프론트엔드 교육 저장소 (Frontend Education Repository)

[![CI/CD](https://github.com/your-username/education-frontend/workflows/CI/badge.svg)](https://github.com/your-username/education-frontend/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 현대적인 프론트엔드 개발을 위한 종합 학습 저장소입니다. **20개의 실전 프로젝트**와 **850+ 예제**를 통해 React, Vue, Angular, Svelte, React Native, Electron 등 모든 주요 프레임워크와 플랫폼을 학습할 수 있습니다.

## 🎉 **NEW! 850+ 예제 & 10개 새로운 플랫폼 추가**

- 📱 **React Native** - 모바일 앱 개발 (50+ 예제)
- 🖥️ **Electron** - 데스크톱 앱 (45+ 예제)
- 🎭 **Remix** - 풀스택 프레임워크 (40+ 예제)
- 🚀 **Astro** - 정적 사이트 생성 (40+ 예제)
- ⚡ **Solid.js** - 진정한 리액티비티 (45+ 예제)
- ⚡ **Qwik** - Resumable 아키텍처 (42+ 예제)
- 🪶 **Preact** - 경량 React 대안 (38+ 예제)
- 🔥 **Lit** - 웹 컴포넌트 (40+ 예제)
- 🏔️ **Alpine.js** - 미니멀 프레임워크 (35+ 예제)
- 🎮 **React Three Fiber** - 3D 그래픽 (50+ 예제)

## 📚 목차

- [프로젝트 개요](#프로젝트-개요)
- [학습 경로](#학습-경로)
- [프로젝트 목록](#프로젝트-목록)
- [시작하기](#시작하기)
- [기술 스택](#기술-스택)
- [기여 방법](#기여-방법)

## 🎯 프로젝트 개요

이 저장소는 프론트엔드 개발자를 위한 종합 학습 리소스입니다. 각 프로젝트는 실무에서 바로 적용 가능한 모범 사례와 함께 제공됩니다.

### 주요 특징

- ✅ **완전한 작동 코드**: 모든 프로젝트는 즉시 실행 가능한 완성된 예제
- 📖 **한글 문서화**: 상세한 한국어 설명과 주석
- 🧪 **테스트 포함**: Jest/Vitest를 활용한 단위 테스트
- 🐳 **Docker 지원**: 모든 프로젝트에 Docker 설정 포함
- 🚀 **CI/CD 파이프라인**: GitHub Actions를 통한 자동화
- 💡 **모범 사례**: 업계 표준에 따른 코드 구조와 패턴

## 🗺️ 학습 경로

### 초급 개발자 (Beginner Track)

프론트엔드 개발을 시작하는 분들을 위한 추천 경로:

```
1. vanilla-js-patterns (2주)
   ↓
2. css-modern (1주)
   ↓
3. react-fundamentals (3주)
   ↓
4. typescript-advanced (2주)
```

### 중급 개발자 (Intermediate Track)

프레임워크 경험이 있는 분들을 위한 경로:

```
1. react-fundamentals (복습, 1주)
   ↓
2. nextjs-fullstack (3주)
   ↓
3. tailwind-components (1주)
   ↓
4. web-performance (2주)
```

### 고급 개발자 (Advanced Track)

여러 프레임워크를 탐구하고 싶은 분들을 위한 경로:

```
1. vue-composition (2주)
   ↓
2. angular-enterprise (2주)
   ↓
3. svelte-kit (2주)
   ↓
4. web-performance (2주)
```

### 전문가 트랙 (Expert Track)

풀스택 및 아키텍처 중심 학습:

```
병렬 학습:
- nextjs-fullstack
- typescript-advanced
- web-performance
- 선택한 프레임워크의 심화 학습
```

## 📦 프로젝트 목록

### 1. [React Fundamentals](./react-fundamentals/)
**난이도**: ⭐⭐☆☆☆ | **학습 시간**: 2-3주

React의 핵심 개념을 다루는 기초 프로젝트

- ✨ React Hooks (useState, useEffect, useContext, useReducer, useMemo, useCallback)
- 🎯 Context API를 활용한 전역 상태 관리
- 🛣️ React Router v6를 사용한 라우팅
- 🎨 CSS Modules와 Styled Components
- 📝 Custom Hooks 패턴

**기술 스택**: React 18, React Router, CSS Modules, Jest, React Testing Library

---

### 2. [Next.js Fullstack](./nextjs-fullstack/)
**난이도**: ⭐⭐⭐⭐☆ | **학습 시간**: 3-4주

Next.js 14의 최신 기능을 활용한 풀스택 애플리케이션

- 🚀 App Router와 Server Components
- 🔄 Server Actions와 데이터 뮤테이션
- 📡 API Routes와 RESTful API 설계
- 🔐 NextAuth.js를 활용한 인증
- 💾 Prisma ORM과 PostgreSQL
- 🎨 Tailwind CSS와 shadcn/ui

**기술 스택**: Next.js 14, TypeScript, Prisma, PostgreSQL, NextAuth, Tailwind CSS

---

### 3. [Vue Composition API](./vue-composition/)
**난이도**: ⭐⭐⭐☆☆ | **학습 시간**: 2-3주

Vue 3의 Composition API와 현대적인 Vue 개발

- 🎪 Composition API와 Script Setup
- 🏪 Pinia를 활용한 상태 관리
- 🛣️ Vue Router 4
- 🎭 Transition과 애니메이션
- 📦 Component 라이브러리 구축
- ⚡ Vite 빌드 도구

**기술 스택**: Vue 3, Pinia, Vue Router, Vite, Vitest

---

### 4. [Angular Enterprise](./angular-enterprise/)
**난이도**: ⭐⭐⭐⭐⭐ | **학습 시간**: 3-4주

Angular 17의 최신 기능으로 구축한 엔터프라이즈급 애플리케이션

- 🎯 Signals를 활용한 반응형 상태 관리
- 🧩 Standalone Components
- 🔧 Dependency Injection 패턴
- 🛡️ RxJS를 활용한 비동기 처리
- 📋 Reactive Forms
- 🏗️ Nx Monorepo 구조

**기술 스택**: Angular 17, RxJS, NgRx, TypeScript, Nx

---

### 5. [SvelteKit App](./svelte-kit/)
**난이도**: ⭐⭐⭐☆☆ | **학습 시간**: 2-3주

SvelteKit을 활용한 SSR 애플리케이션

- ⚡ Svelte의 컴파일 타임 최적화
- 🎬 SvelteKit의 파일 기반 라우팅
- 🔄 SSR과 SSG 하이브리드
- 🏪 Svelte Stores 상태 관리
- 🎨 Svelte Transitions
- 📡 Form Actions와 데이터 로딩

**기술 스택**: SvelteKit, Svelte, TypeScript, Vitest

---

### 6. [Vanilla JS Patterns](./vanilla-js-patterns/)
**난이도**: ⭐⭐⭐☆☆ | **학습 시간**: 2주

프레임워크 없이 배우는 JavaScript 디자인 패턴

- 🏗️ MVC, MVP, MVVM 패턴
- 🎯 Module Pattern과 Revealing Module Pattern
- 🏭 Factory, Singleton, Observer 패턴
- 🎪 Pub/Sub 이벤트 시스템
- 🔄 State Management 구현
- 🎨 Virtual DOM 기초 구현

**기술 스택**: Vanilla JavaScript (ES6+), Webpack, Jest

---

### 7. [TypeScript Advanced](./typescript-advanced/)
**난이도**: ⭐⭐⭐⭐☆ | **학습 시간**: 2-3주

고급 TypeScript 패턴과 타입 시스템

- 🎯 Generics와 Type Inference
- 🔧 Utility Types와 Mapped Types
- 🏗️ Conditional Types
- 📝 Template Literal Types
- 🎪 Decorators와 Metadata
- 🔄 Type Guards와 Narrowing
- 📦 모듈 시스템과 Declaration Files

**기술 스택**: TypeScript 5.x, ts-node, Jest

---

### 8. [Modern CSS](./css-modern/)
**난이도**: ⭐⭐☆☆☆ | **학습 시간**: 1-2주

최신 CSS 기술과 레이아웃 시스템

- 📐 CSS Grid 고급 레이아웃
- 📦 Flexbox 마스터하기
- 📱 Container Queries
- 🎨 CSS Custom Properties (변수)
- 🎭 CSS Animations과 Transitions
- 🌓 Dark Mode 구현
- 🎯 CSS-in-JS 패턴

**기술 스택**: CSS3, PostCSS, SASS/SCSS

---

### 9. [Tailwind Components](./tailwind-components/)
**난이도**: ⭐⭐⭐☆☆ | **학습 시간**: 2주

재사용 가능한 Tailwind 컴포넌트 라이브러리

- 🎨 Tailwind CSS 고급 패턴
- 🧩 Headless UI 컴포넌트
- 📚 Storybook 문서화
- ♿ 접근성 (a11y) 모범 사례
- 🎯 Variant 기반 컴포넌트 설계
- 📦 NPM 패키지 배포

**기술 스택**: Tailwind CSS, React, Storybook, Headless UI

---

### 10. [Web Performance](./web-performance/)
**난이도**: ⭐⭐⭐⭐☆ | **학습 시간**: 2-3주

웹 성능 최적화 기법과 모범 사례

- ⚡ Core Web Vitals 최적화
- 🎯 Code Splitting과 Lazy Loading
- 🖼️ 이미지 최적화 (WebP, AVIF)
- 💾 캐싱 전략
- 🔄 Service Workers와 PWA
- 📊 Performance Monitoring
- 🎪 Bundle 분석과 최적화

**기술 스택**: Webpack, Lighthouse, Web Vitals, Workbox

---

## 🆕 **새로운 플랫폼 (10개 추가!)**

### 11. [React Native Mobile](./react-native-mobile/) 📱
**난이도**: ⭐⭐⭐⭐☆ | **학습 시간**: 3-4주 | **예제**: 50+

크로스 플랫폼 모바일 앱 개발

- 📱 iOS/Android 네이티브 앱
- 🎨 네이티브 UI 컴포넌트
- 🗺️ React Navigation
- 💾 AsyncStorage & 오프라인 지원
- 📸 카메라, 위치 등 네이티브 API
- ⚡ Reanimated 애니메이션

**기술 스택**: React Native, Expo, TypeScript, Zustand

---

### 12. [Electron Desktop](./electron-desktop/) 🖥️
**난이도**: ⭐⭐⭐⭐☆ | **학습 시간**: 3주 | **예제**: 45+

크로스 플랫폼 데스크톱 앱 개발

- 🖥️ Windows/macOS/Linux 지원
- 🔌 IPC 통신 (Main ↔ Renderer)
- 📁 파일 시스템 접근
- 🔔 시스템 트레이 & 알림
- 🔄 자동 업데이트
- 🔒 보안 & 샌드박싱

**기술 스택**: Electron, React, TypeScript, electron-builder

---

### 13. [Remix Fullstack](./remix-fullstack/) 🎭
**난이도**: ⭐⭐⭐⭐☆ | **학습 시간**: 3주 | **예제**: 40+

Remix를 활용한 풀스택 웹 앱

- 🎭 Server/Client 모델
- 📡 Loader & Action 패턴
- 🔄 낙관적 UI
- 📝 Form 처리
- 🚀 Progressive Enhancement
- 🎯 중첩 라우팅

**기술 스택**: Remix, React, Prisma, TypeScript

---

### 14. [Astro Static](./astro-static/) 🚀
**난이도**: ⭐⭐⭐☆☆ | **학습 시간**: 2주 | **예제**: 40+

초고속 정적 사이트 생성

- 🏝️ Islands Architecture
- ⚡ 0KB JavaScript (기본)
- 🔄 React/Vue/Svelte 통합
- 📝 MDX 지원
- 🎨 컴포넌트 컬렉션
- 🚀 최적화된 빌드

**기술 스택**: Astro, TypeScript, MDX

---

### 15. [Solid.js Reactive](./solidjs-reactive/) ⚡
**난이도**: ⭐⭐⭐☆☆ | **학습 시간**: 2주 | **예제**: 45+

진정한 리액티비티 시스템

- ⚡ Fine-grained Reactivity
- 📊 Signals & Effects
- 🎯 No Virtual DOM
- 🔄 Stores & Context
- 🚀 뛰어난 성능
- 📦 작은 번들 크기

**기술 스택**: Solid.js, TypeScript, Vite

---

### 16. [Qwik Resumable](./qwik-resumable/) ⚡
**난이도**: ⭐⭐⭐⭐☆ | **학습 시간**: 2-3주 | **예제**: 42+

Resumable 아키텍처

- ⚡ 0ms TTI (Time To Interactive)
- 🔄 No Hydration
- 📦 자동 코드 스플리팅
- 🎯 On-demand JS
- 🚀 Qwik City 라우터
- 💡 Server$ 함수

**기술 스택**: Qwik, TypeScript, Vite

---

### 17. [Preact Lightweight](./preact-lightweight/) 🪶
**난이도**: ⭐⭐☆☆☆ | **학습 시간**: 1-2주 | **예제**: 38+

3KB의 React 대안

- 🪶 3KB 작은 크기
- ⚛️ React 호환 API
- 🚀 빠른 성능
- 🔄 SSR 지원
- 📦 React 라이브러리 호환
- ⚡ 빠른 개발 속도

**기술 스택**: Preact, TypeScript, Vite

---

### 18. [Lit Web Components](./lit-webcomponents/) 🔥
**난이도**: ⭐⭐⭐☆☆ | **학습 시간**: 2주 | **예제**: 40+

표준 웹 컴포넌트

- 🔥 Web Standards 기반
- 🎯 프레임워크 독립적
- 🌐 Shadow DOM
- ⚡ Reactive Properties
- 🎨 Scoped Styles
- 📦 재사용 가능

**기술 스택**: Lit, TypeScript, Web Components

---

### 19. [Alpine.js Minimal](./alpinejs-minimal/) 🏔️
**난이도**: ⭐☆☆☆☆ | **학습 시간**: 1주 | **예제**: 35+

가장 가벼운 프레임워크

- 🏔️ 15KB 크기
- 📝 HTML에 직접 작성
- 🎯 jQuery 대체
- 🔧 빌드 과정 불필요
- 🎨 Tailwind CSS 완벽 호환
- ⚡ 즉시 사용 가능

**기술 스택**: Alpine.js, HTML, Tailwind CSS

---

### 20. [React Three Fiber](./react-three-fiber/) 🎮
**난이도**: ⭐⭐⭐⭐⭐ | **학습 시간**: 4주 | **예제**: 50+

React로 만드는 3D 그래픽

- 🎮 Three.js + React
- 🎨 3D 씬 & 오브젝트
- 💡 조명 & 카메라
- 🎬 애니메이션
- ⚙️ 물리 엔진 (Rapier)
- 🌈 후처리 효과

**기술 스택**: React Three Fiber, Three.js, TypeScript

---

## 📊 **프로젝트 요약 통계**

| 플랫폼 | 난이도 | 예제 수 | 학습 시간 |
|--------|---------|---------|-----------|
| React | ⭐⭐ | 50+ | 2-3주 |
| Next.js | ⭐⭐⭐⭐ | 40+ | 3-4주 |
| Vue | ⭐⭐⭐ | 50+ | 2-3주 |
| Angular | ⭐⭐⭐⭐⭐ | 40+ | 3-4주 |
| Svelte | ⭐⭐⭐ | 40+ | 2-3주 |
| TypeScript | ⭐⭐⭐⭐ | 50+ | 2-3주 |
| Tailwind | ⭐⭐⭐ | 60+ | 2주 |
| Performance | ⭐⭐⭐⭐ | 30+ | 2-3주 |
| Vanilla JS | ⭐⭐⭐ | 50+ | 2주 |
| CSS | ⭐⭐ | 25+ | 1-2주 |
| React Native | ⭐⭐⭐⭐ | 50+ | 3-4주 |
| Electron | ⭐⭐⭐⭐ | 45+ | 3주 |
| Remix | ⭐⭐⭐⭐ | 40+ | 3주 |
| Astro | ⭐⭐⭐ | 40+ | 2주 |
| Solid.js | ⭐⭐⭐ | 45+ | 2주 |
| Qwik | ⭐⭐⭐⭐ | 42+ | 2-3주 |
| Preact | ⭐⭐ | 38+ | 1-2주 |
| Lit | ⭐⭐⭐ | 40+ | 2주 |
| Alpine.js | ⭐ | 35+ | 1주 |
| React Three Fiber | ⭐⭐⭐⭐⭐ | 50+ | 4주 |
| **총합** | | **850+** | **44-58주** |

---

## 🚀 시작하기

### 필수 요구사항

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0 (권장) 또는 npm/yarn
- **Docker**: >= 20.10.0 (선택사항)
- **Git**: >= 2.30.0

### 전체 프로젝트 설치

```bash
# 저장소 클론
git clone https://github.com/your-username/education-frontend.git
cd education-frontend

# 모든 프로젝트의 의존성 설치 (루트에서)
pnpm install --recursive

# 또는 개별 프로젝트 설치
cd react-fundamentals
pnpm install
```

### 개별 프로젝트 실행

각 프로젝트는 독립적으로 실행 가능합니다:

```bash
# React Fundamentals
cd react-fundamentals
pnpm dev

# Next.js Fullstack
cd nextjs-fullstack
pnpm dev

# Vue Composition
cd vue-composition
pnpm dev

# 기타 프로젝트도 동일한 패턴
```

### Docker로 실행

```bash
# 개별 프로젝트 실행
cd react-fundamentals
docker-compose up

# 또는 루트에서 모든 프로젝트 실행
docker-compose up
```

## 🛠️ 기술 스택

### 프레임워크 & 라이브러리

| 카테고리 | 기술 |
|---------|------|
| **UI 프레임워크** | React 18, Vue 3, Angular 17, Svelte 4 |
| **메타 프레임워크** | Next.js 14, SvelteKit, Nuxt 3 |
| **상태 관리** | Zustand, Pinia, NgRx, Svelte Stores |
| **라우팅** | React Router, Vue Router, Angular Router |
| **스타일링** | Tailwind CSS, CSS Modules, Styled Components |
| **타입 시스템** | TypeScript 5.x |

### 개발 도구

| 카테고리 | 기술 |
|---------|------|
| **빌드 도구** | Vite, Webpack, esbuild |
| **테스팅** | Jest, Vitest, React Testing Library, Playwright |
| **린팅** | ESLint, Prettier, Stylelint |
| **CI/CD** | GitHub Actions, Docker |
| **문서화** | Storybook, TypeDoc |

### 백엔드 & 데이터베이스

| 카테고리 | 기술 |
|---------|------|
| **ORM** | Prisma, TypeORM |
| **데이터베이스** | PostgreSQL, SQLite |
| **인증** | NextAuth.js, Passport.js |
| **API** | REST, GraphQL |

## 📖 학습 자료

### 공식 문서

- [React 공식 문서](https://react.dev/)
- [Vue 공식 문서](https://vuejs.org/)
- [Angular 공식 문서](https://angular.io/)
- [Svelte 공식 문서](https://svelte.dev/)
- [Next.js 공식 문서](https://nextjs.org/)

### 추천 학습 순서

1. **JavaScript 기초 다지기** (1-2주)
   - vanilla-js-patterns 프로젝트로 시작
   - ES6+ 문법 완전 이해

2. **CSS 마스터하기** (1주)
   - css-modern 프로젝트
   - 레이아웃과 반응형 디자인

3. **TypeScript 학습** (2주)
   - typescript-advanced 프로젝트
   - 타입 시스템 이해

4. **프레임워크 선택** (3-4주)
   - React: react-fundamentals → nextjs-fullstack
   - Vue: vue-composition
   - Angular: angular-enterprise
   - Svelte: svelte-kit

5. **고급 주제** (2-3주)
   - tailwind-components
   - web-performance

## 🧪 테스트 실행

### 전체 프로젝트 테스트

```bash
# 루트 디렉토리에서
pnpm test --recursive
```

### 개별 프로젝트 테스트

```bash
cd react-fundamentals
pnpm test

# 커버리지 포함
pnpm test:coverage

# Watch 모드
pnpm test:watch
```

## 🐳 Docker 사용법

### 개별 프로젝트

```bash
cd react-fundamentals

# 이미지 빌드
docker build -t react-fundamentals .

# 컨테이너 실행
docker run -p 3000:3000 react-fundamentals

# Docker Compose 사용
docker-compose up
```

### 전체 프로젝트 (루트)

```bash
# 모든 프로젝트 실행
docker-compose up

# 특정 프로젝트만 실행
docker-compose up react-fundamentals nextjs-fullstack
```

## 🔧 개발 환경 설정

### VSCode 추천 확장 프로그램

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "Vue.volar",
    "angular.ng-template",
    "svelte.svelte-vscode",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### 프로젝트별 설정

각 프로젝트 디렉토리의 `.vscode/settings.json` 참조

## 🤝 기여 방법

이 프로젝트에 기여하고 싶으시다면:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 기여 가이드라인

- 모든 코드는 ESLint와 Prettier 규칙을 따라야 합니다
- 새로운 기능에는 테스트가 포함되어야 합니다
- README는 한국어로 작성해주세요
- 커밋 메시지는 [Conventional Commits](https://www.conventionalcommits.org/) 형식을 따라주세요

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 👥 제작자

- **Your Name** - [GitHub](https://github.com/your-username)

## 🙏 감사의 말

이 프로젝트는 다음 오픈소스 프로젝트들의 영향을 받았습니다:

- [React](https://react.dev/)
- [Vue.js](https://vuejs.org/)
- [Angular](https://angular.io/)
- [Svelte](https://svelte.dev/)
- [Next.js](https://nextjs.org/)

## 📞 문의 및 지원

- 이슈: [GitHub Issues](https://github.com/your-username/education-frontend/issues)
- 이메일: your.email@example.com
- 디스코드: [커뮤니티 링크]

## 🗓️ 업데이트 로그

### 2024.01
- 🎉 초기 릴리즈
- ✨ 10개 프로젝트 완성
- 📚 한글 문서화 완료
- 🧪 테스트 커버리지 80% 이상
- 🐳 Docker 지원 추가
- 🚀 CI/CD 파이프라인 구축

---

**Happy Learning! 즐거운 학습 되세요! 🚀**
