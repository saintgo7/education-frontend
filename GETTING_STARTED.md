# 시작하기 (Getting Started)

## 📋 목차
- [시스템 요구사항](#시스템-요구사항)
- [설치 방법](#설치-방법)
- [프로젝트 실행](#프로젝트-실행)
- [Docker로 실행](#docker로-실행)
- [플랫폼별 가이드](#플랫폼별-가이드)
- [문제 해결](#문제-해결)

## 💻 시스템 요구사항

### 필수 요구사항
- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0
- **Git**: 최신 버전
- **메모리**: 최소 8GB RAM (권장 16GB)
- **디스크 공간**: 최소 10GB

### 선택 요구사항
- **Docker**: 컨테이너 실행시
- **Docker Compose**: 다중 서비스 실행시

## 🚀 설치 방법

### 1. 저장소 클론

```bash
git clone https://github.com/your-username/education-frontend.git
cd education-frontend
```

### 2. pnpm 설치

```bash
# npm을 통한 설치
npm install -g pnpm

# 또는 standalone script
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### 3. 의존성 설치

```bash
# 모든 프로젝트의 의존성 설치
pnpm install
```

## 🎯 프로젝트 실행

### 개별 프로젝트 실행

각 프로젝트는 독립적으로 실행할 수 있습니다:

```bash
# React Fundamentals
pnpm --filter react-fundamentals dev

# Next.js Fullstack
pnpm --filter nextjs-fullstack dev

# Vue Composition
pnpm --filter vue-composition dev

# Angular Enterprise
pnpm --filter angular-enterprise dev

# Svelte Kit
pnpm --filter svelte-kit dev
```

### 루트 스크립트 사용

```bash
# React 프로젝트 실행
pnpm dev:react

# Next.js 프로젝트 실행
pnpm dev:next

# Vue 프로젝트 실행
pnpm dev:vue

# Angular 프로젝트 실행
pnpm dev:angular
```

### 모든 프로젝트 동시 실행

```bash
# 모든 프로젝트를 병렬로 개발 모드 실행
pnpm dev
```

## 🐳 Docker로 실행

### Docker Compose로 모든 서비스 실행

```bash
# 모든 서비스 빌드 및 실행
docker-compose up -d

# 특정 서비스만 실행
docker-compose up react-fundamentals nextjs-fullstack

# 로그 확인
docker-compose logs -f

# 서비스 중지
docker-compose down
```

### 개별 Docker 빌드

```bash
cd react-fundamentals
docker build -t react-fundamentals .
docker run -p 3000:80 react-fundamentals
```

## 📚 플랫폼별 가이드

### React Fundamentals (포트: 3000)
```bash
cd react-fundamentals
pnpm install
pnpm dev
```
- 100+ React 컴포넌트, 훅, 패턴 예제
- React 18 최신 기능 포함
- TypeScript 완벽 지원

### Next.js Fullstack (포트: 3001)
```bash
cd nextjs-fullstack
pnpm install
pnpm dev
```
- App Router (Next.js 14)
- Server Components
- API Routes & Server Actions
- 115+ 실전 예제

### Vue 3 Composition (포트: 3002)
```bash
cd vue-composition
pnpm install
pnpm dev
```
- Composition API
- Pinia 상태관리
- Vue Router
- 100+ Composable 예제

### Angular Enterprise (포트: 3003)
```bash
cd angular-enterprise
pnpm install
pnpm start
```
- Angular 17
- Standalone Components
- Signals
- RxJS 패턴

### TypeScript Advanced (포트: 3006)
```bash
cd typescript-advanced
pnpm install
pnpm dev
```
- 고급 타입 패턴
- Generic 활용
- Utility Types
- Type Guards

### Tailwind Components (포트: 3008)
```bash
cd tailwind-components
pnpm install
pnpm dev
```
- Utility-first CSS
- 재사용 가능한 컴포넌트
- 반응형 디자인
- Dark mode

## 🔧 빌드 및 배포

### 프로덕션 빌드

```bash
# 모든 프로젝트 빌드
pnpm build:all

# 개별 프로젝트 빌드
pnpm --filter react-fundamentals build
```

### 테스트 실행

```bash
# 모든 프로젝트 테스트
pnpm test:all

# 개별 프로젝트 테스트
pnpm --filter react-fundamentals test
```

### Lint 및 포맷

```bash
# Lint 실행
pnpm lint:all

# 코드 포맷팅
pnpm format:all
```

## ❓ 문제 해결

### pnpm 설치 오류
```bash
# pnpm 캐시 정리
pnpm store prune

# node_modules 삭제 후 재설치
rm -rf node_modules
pnpm install
```

### 포트 충돌 해결
```bash
# 사용 중인 포트 확인 (예: 3000)
lsof -i :3000

# 프로세스 종료
kill -9 <PID>
```

### 메모리 부족 오류
```bash
# Node.js 메모리 한도 증가
export NODE_OPTIONS="--max-old-space-size=4096"
```

### Docker 빌드 오류
```bash
# Docker 캐시 정리
docker system prune -a

# BuildKit 사용
DOCKER_BUILDKIT=1 docker-compose build
```

## 📖 추가 리소스

- [프로젝트 구조](./ARCHITECTURE.md)
- [기여 가이드](./CONTRIBUTING.md)
- [API 문서](./API_DOCS.md)
- [예제 목록](./EXAMPLES_LIST.md)

## 🆘 도움말

문제가 발생하면:
1. [Issues](https://github.com/your-username/education-frontend/issues) 확인
2. [Discussions](https://github.com/your-username/education-frontend/discussions) 참여
3. 문서 검색

---

**행복한 학습 되세요! 🎉**
