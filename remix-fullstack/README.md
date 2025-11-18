# Remix Fullstack - 풀스택 웹 앱 개발 교육

Remix를 사용한 풀스택 웹 애플리케이션 개발 교육 프로젝트입니다.

## 🎭 주요 예제 (40+)

### 1. 라우팅 & 내비게이션 (8개)
- ✅ FileBasedRouting - 파일 기반 라우팅
- ✅ DynamicRoutes - 동적 라우트
- ✅ NestedRoutes - 중첩 라우트
- ✅ CatchBoundary - 에러 경계
- ✅ SplatRoutes - 와일드카드 라우트
- ✅ Redirects - 리다이렉트
- ✅ Prefetching - 프리페칭
- ✅ Navigation - 프로그래밍 네비게이션

### 2. 데이터 로딩 (7개)
- ✅ Loader - 서버 데이터 로딩
- ✅ ParallelLoading - 병렬 로딩
- ✅ DeferredData - 지연된 데이터
- ✅ ResourceRoutes - 리소스 라우트
- ✅ CacheControl - 캐시 제어
- ✅ Revalidation - 재검증
- ✅ OptimisticUI - 낙관적 UI

### 3. 폼 & 액션 (7개)
- ✅ FormSubmission - 폼 제출
- ✅ ActionHandler - 액션 핸들러
- ✅ FormValidation - 폼 검증
- ✅ FileUpload - 파일 업로드
- ✅ MultiStepForm - 다단계 폼
- ✅ FormReset - 폼 리셋
- ✅ PendingState - 대기 상태

### 4. 인증 & 세션 (5개)
- ✅ SessionManagement - 세션 관리
- ✅ CookieAuth - 쿠키 인증
- ✅ ProtectedRoutes - 보호된 라우트
- ✅ LoginFlow - 로그인 플로우
- ✅ Logout - 로그아웃

### 5. 데이터베이스 (4개)
- ✅ PrismaSetup - Prisma 설정
- ✅ CRUD - CRUD 작업
- ✅ Relationships - 관계 설정
- ✅ Migrations - 마이그레이션

### 6. API & 통합 (4개)
- ✅ RestAPI - REST API 엔드포인트
- ✅ WebhookHandler - 웹훅 처리
- ✅ ThirdPartyAPI - 외부 API 연동
- ✅ RateLimiting - 속도 제한

### 7. SEO & 메타데이터 (3개)
- ✅ MetaTags - 메타 태그
- ✅ OpenGraph - Open Graph
- ✅ Sitemap - 사이트맵

### 8. 에러 처리 (2개)
- ✅ ErrorBoundary - 에러 바운더리
- ✅ NotFound - 404 페이지

## 🚀 시작하기

```bash
# 의존성 설치
pnpm install

# 데이터베이스 마이그레이션
pnpm prisma migrate dev

# 개발 서버 시작
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 실행
pnpm start
```

## 📚 학습 경로

1. **라우팅** (1주) - Remix 라우팅 이해
2. **데이터 로딩** (1주) - Loader 패턴
3. **폼 & 액션** (1주) - 데이터 변경
4. **인증** (1주) - 세션 관리
5. **최적화** (1주) - 성능 튜닝

## 🛠️ 기술 스택

- Remix 2.5
- React 18
- Vite 5
- Prisma ORM
- TypeScript 5
- Zod (검증)

## 🎯 주요 기능

- 서버 사이드 렌더링 (SSR)
- 파일 기반 라우팅
- 타입 안전 API
- 낙관적 UI 업데이트
- 자동 에러 처리
- 점진적 향상

## 📖 Remix 철학

1. **서버/클라이언트 모델** - 명확한 경계
2. **Web Standards** - 표준 API 사용
3. **Progressive Enhancement** - 점진적 향상
4. **Resilient** - 네트워크 실패 대응
