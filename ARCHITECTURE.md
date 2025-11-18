# 아키텍처 가이드 (Architecture Guide)

## 📐 전체 구조

```
education-frontend/
├── .github/                    # GitHub Actions CI/CD
│   └── workflows/
│       └── ci.yml
├── react-fundamentals/         # React 기초 프로젝트
│   ├── src/
│   │   ├── examples-100/      # 100+ React 예제
│   │   ├── components/
│   │   ├── hooks/
│   │   └── contexts/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── Dockerfile
├── nextjs-fullstack/          # Next.js 풀스택 프로젝트
│   ├── app/
│   │   ├── examples-100/      # 100+ Next.js 예제
│   │   ├── api/
│   │   └── (routes)/
│   ├── package.json
│   ├── next.config.js
│   └── Dockerfile
├── [... 28 more platforms ...]
├── pnpm-workspace.yaml        # pnpm monorepo 설정
├── package.json               # 루트 package.json
├── docker-compose.yml         # 멀티 서비스 Docker
├── README.md                  # 메인 문서
├── GETTING_STARTED.md         # 시작 가이드
└── ARCHITECTURE.md            # 이 파일
```

## 🏗️ Monorepo 아키텍처

### pnpm Workspace

이 프로젝트는 **pnpm workspace**를 사용하여 30개의 독립적인 프로젝트를 하나의 저장소에서 관리합니다.

**장점:**
- ✅ 의존성 공유로 디스크 공간 절약
- ✅ 일관된 의존성 버전 관리
- ✅ 빠른 설치 속도
- ✅ 프로젝트 간 코드 공유 가능

**구조:**
```yaml
# pnpm-workspace.yaml
packages:
  - 'react-fundamentals'
  - 'nextjs-fullstack'
  - 'vue-composition'
  # ... 27 more projects
```

## 📦 프로젝트 분류

### 1. 핵심 프레임워크 (5개)
- **react-fundamentals** - React 18 기초
- **nextjs-fullstack** - Next.js 14 App Router
- **vue-composition** - Vue 3 Composition API
- **angular-enterprise** - Angular 17
- **svelte-kit** - SvelteKit

### 2. 언어 & 스타일링 (3개)
- **typescript-advanced** - TypeScript 고급 패턴
- **css-modern** - Modern CSS
- **tailwind-components** - Tailwind CSS

### 3. 성능 & 기초 (2개)
- **web-performance** - 성능 최적화
- **vanilla-js-patterns** - 순수 JavaScript

### 4. 크로스 플랫폼 (2개)
- **react-native-mobile** - React Native
- **electron-desktop** - Electron

### 5. 풀스택 프레임워크 (4개)
- **remix-fullstack** - Remix
- **astro-static** - Astro
- **nuxtjs-fullstack** - Nuxt.js
- **gatsby-static** - Gatsby

### 6. 모던 리액티브 (3개)
- **solidjs-reactive** - Solid.js
- **qwik-resumable** - Qwik
- **preact-lightweight** - Preact

### 7. 웹 컴포넌트 & 미니멀 (5개)
- **lit-webcomponents** - Lit
- **webcomponents-vanilla** - Web Components
- **alpinejs-minimal** - Alpine.js
- **stimulus-html** - Stimulus
- **htmx-hypermedia** - htmx

### 8. 특수 목적 (3개)
- **react-three-fiber** - 3D Graphics
- **flutter-web** - Flutter Web
- **blazor-dotnet** - Blazor

### 9. 엔터프라이즈 & 관리자 (3개)
- **emberjs-enterprise** - Ember.js
- **react-admin-panel** - React Admin
- **refine-enterprise** - Refine

## 🔄 데이터 흐름

### Vite 기반 프로젝트 (대부분)
```
index.html → main.tsx → App.tsx → Components
                ↓
            examples-100/ (100+ 예제)
```

### Next.js (App Router)
```
app/layout.tsx → app/page.tsx → components/
                       ↓
                app/examples-100/ (115+ 예제)
                       ↓
              app/api/[routes]/ (API Routes)
```

### Angular
```
main.ts → app.component.ts → modules → components
                    ↓
          src/app/examples-100/ (100+ 예제)
```

## 🎨 디자인 패턴

### 1. 컴포넌트 기반 아키텍처
모든 프로젝트는 재사용 가능한 컴포넌트로 구성됩니다.

```tsx
// React Example
<Component>
  <Header />
  <Content>
    <Sidebar />
    <Main />
  </Content>
  <Footer />
</Component>
```

### 2. 상태 관리 패턴

**React 계열:**
- Context API (작은 앱)
- Zustand (중간 앱)
- Redux Toolkit (큰 앱)

**Vue:**
- Pinia (Vue 3)
- Composition API

**Angular:**
- Services + RxJS
- Signals (Angular 17+)

### 3. 라우팅 패턴

**File-based Routing:**
- Next.js: `app/` 디렉토리
- SvelteKit: `src/routes/`
- Nuxt.js: `pages/`
- Astro: `src/pages/`

**Component-based Routing:**
- React Router
- Vue Router
- Angular Router

## 🐳 Docker 아키텍처

### Multi-stage Build
```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```

### Docker Compose Services
```yaml
services:
  react-fundamentals:    # Port 3000
  nextjs-fullstack:      # Port 3001
  vue-composition:       # Port 3002
  angular-enterprise:    # Port 3003
  # ... 26 more services
```

## 🔐 보안 아키텍처

### 1. 의존성 보안
```bash
# 정기적인 보안 감사
pnpm audit

# 자동 업데이트
dependabot.yml
```

### 2. 환경 변수
```bash
# .env.local (git에 포함 안 됨)
DATABASE_URL=xxx
API_KEY=yyy
```

### 3. CSP (Content Security Policy)
```ts
// next.config.js
{
  headers: {
    'Content-Security-Policy': "default-src 'self'"
  }
}
```

## 📊 성능 최적화

### 1. 코드 스플리팅
```tsx
// React lazy loading
const Component = lazy(() => import('./Component'));
```

### 2. 이미지 최적화
```tsx
// Next.js Image
<Image src="/img.jpg" width={500} height={300} />
```

### 3. 빌드 최적화
```ts
// vite.config.ts
{
  build: {
    rollupOptions: {
      output: {
        manualChunks: {...}
      }
    }
  }
}
```

## 🧪 테스트 아키텍처

### 테스트 계층
```
E2E Tests (Playwright/Cypress)
       ↓
Integration Tests (Testing Library)
       ↓
Unit Tests (Jest/Vitest)
```

### 테스트 구조
```
src/
├── components/
│   ├── Button.tsx
│   └── Button.test.tsx
├── hooks/
│   ├── useFetch.ts
│   └── useFetch.test.ts
```

## 📱 반응형 디자인

### Breakpoints
```css
/* Mobile First */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

## 🚀 배포 아키텍처

### CI/CD Pipeline
```
Push → GitHub Actions
  ↓
Lint & Test
  ↓
Build Docker Images
  ↓
Deploy to Cloud
```

### 배포 옵션
- **Vercel** (Next.js, React)
- **Netlify** (Static Sites)
- **Docker** (Self-hosted)
- **AWS/GCP/Azure** (Enterprise)

## 📈 확장성

### 수평 확장
```yaml
# docker-compose scale
docker-compose up --scale react-fundamentals=3
```

### 마이크로프론트엔드
```
Shell App (Container)
   ↓
Remote 1 (React)
Remote 2 (Vue)
Remote 3 (Angular)
```

## 🔍 모니터링 & 로깅

### 성능 모니터링
- Web Vitals
- Lighthouse CI
- Performance API

### 에러 추적
- Sentry
- LogRocket
- Custom Error Boundaries

---

**더 자세한 내용은 각 프로젝트의 README.md를 참조하세요.**
