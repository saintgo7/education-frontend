# 빠른 시작 가이드 (Quick Start Guide)

## 🚀 5분 안에 시작하기

### 1. 전체 설치

```bash
# 저장소 클론
git clone https://github.com/your-username/education-frontend.git
cd education-frontend

# 모든 프로젝트 의존성 설치
pnpm install:all
```

### 2. 개별 프로젝트 실행

#### React Fundamentals (포트: 5173)
```bash
pnpm dev:react
# 또는
cd react-fundamentals && pnpm dev
```

#### Next.js Fullstack (포트: 3000)
```bash
# 환경 변수 설정 필요
cd nextjs-fullstack
cp .env.example .env
pnpm dev
```

#### Vue Composition (포트: 5173)
```bash
pnpm dev:vue
```

#### Angular Enterprise (포트: 4200)
```bash
pnpm dev:angular
```

#### SvelteKit (포트: 5173)
```bash
pnpm dev:svelte
```

#### 나머지 프로젝트들
```bash
pnpm dev:vanilla   # Vanilla JS Patterns
pnpm dev:ts        # TypeScript Advanced
pnpm dev:css       # CSS Modern
pnpm dev:tailwind  # Tailwind Components
pnpm dev:perf      # Web Performance
```

### 3. Docker로 모든 프로젝트 실행

```bash
# 모든 프로젝트를 Docker로 실행
docker-compose up

# 백그라운드 실행
docker-compose up -d

# 종료
docker-compose down
```

#### 접속 주소 (Docker 실행 시)

- React Fundamentals: http://localhost:3000
- Next.js Fullstack: http://localhost:3001
- Vue Composition: http://localhost:3002
- Angular Enterprise: http://localhost:3003
- SvelteKit: http://localhost:3004
- Vanilla JS: http://localhost:3005
- TypeScript Advanced: http://localhost:3006
- CSS Modern: http://localhost:3007
- Tailwind Components: http://localhost:3008
- Web Performance: http://localhost:3009

### 4. 테스트 실행

```bash
# 모든 프로젝트 테스트
pnpm test:all

# 특정 프로젝트 테스트
cd react-fundamentals && pnpm test
```

### 5. 빌드

```bash
# 모든 프로젝트 빌드
pnpm build:all

# 특정 프로젝트 빌드
cd react-fundamentals && pnpm build
```

## 📖 학습 경로 추천

### 초급자 (처음 시작하는 분)

1. **Week 1-2**: `vanilla-js-patterns` - JavaScript 기초
2. **Week 3**: `css-modern` - CSS 마스터하기
3. **Week 4-6**: `react-fundamentals` - React 배우기
4. **Week 7-8**: `typescript-advanced` - TypeScript 학습

### 중급자 (프레임워크 경험 있는 분)

1. **Week 1**: `react-fundamentals` (복습)
2. **Week 2-4**: `nextjs-fullstack` - Next.js 풀스택
3. **Week 5**: `tailwind-components` - UI 컴포넌트
4. **Week 6-7**: `web-performance` - 성능 최적화

### 고급자 (여러 프레임워크 학습)

병렬 학습 추천:
- `vue-composition` - Vue 3
- `angular-enterprise` - Angular 17
- `svelte-kit` - SvelteKit
- `web-performance` - 성능 최적화

## 🛠️ 문제 해결

### 포트가 이미 사용 중인 경우

각 프로젝트의 설정 파일에서 포트를 변경하세요:
- Vite: `vite.config.ts`의 `server.port`
- Next.js: `package.json`의 `-p` 플래그
- Angular: `angular.json`의 `serve.options.port`

### pnpm 설치 오류

```bash
# pnpm 재설치
npm install -g pnpm@latest

# 캐시 정리
pnpm store prune
```

### Docker 빌드 오류

```bash
# Docker 캐시 정리
docker system prune -a

# 이미지 재빌드
docker-compose build --no-cache
```

## 💡 유용한 명령어

```bash
# 모든 프로젝트 린트
pnpm lint:all

# 모든 프로젝트 포맷팅
pnpm format:all

# Docker 로그 확인
docker-compose logs -f [service-name]

# 특정 서비스만 시작
docker-compose up react-fundamentals nextjs-fullstack
```

## 📞 도움이 필요하신가요?

- [GitHub Issues](https://github.com/your-username/education-frontend/issues)
- [전체 문서](./README.md)
- [기여 가이드](./CONTRIBUTING.md)

---

**Happy Learning! 즐거운 학습 되세요! 🚀**
