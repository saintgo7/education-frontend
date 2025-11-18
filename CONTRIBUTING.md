# 기여 가이드 (Contributing Guide)

이 프로젝트에 기여해주셔서 감사합니다! 🎉

## 시작하기

### 필수 요구사항

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Git >= 2.30.0

### 개발 환경 설정

```bash
# 저장소 포크 및 클론
git clone https://github.com/your-username/education-frontend.git
cd education-frontend

# 의존성 설치
pnpm install --recursive

# 개발 서버 시작 (특정 프로젝트)
cd react-fundamentals
pnpm dev
```

## 기여 방법

### 1. 이슈 생성

버그를 발견하거나 새로운 기능을 제안하고 싶다면 먼저 이슈를 생성해주세요.

### 2. 브랜치 생성

```bash
git checkout -b feature/your-feature-name
# 또는
git checkout -b fix/bug-description
```

### 3. 변경사항 작성

- 코드 스타일 가이드를 따라주세요
- 의미 있는 커밋 메시지를 작성해주세요
- 테스트를 추가해주세요

### 4. 테스트

```bash
# 특정 프로젝트 테스트
cd react-fundamentals
pnpm test

# 린트 검사
pnpm lint

# 타입 체크
pnpm type-check
```

### 5. 커밋

Conventional Commits 형식을 따라주세요:

```bash
git commit -m "feat: Add new feature"
git commit -m "fix: Fix bug in component"
git commit -m "docs: Update README"
git commit -m "test: Add unit tests"
git commit -m "refactor: Improve code structure"
```

### 6. Pull Request

1. 변경사항을 푸시합니다
2. GitHub에서 Pull Request를 생성합니다
3. PR 템플릿을 작성합니다
4. 리뷰를 기다립니다

## 코드 스타일

### JavaScript/TypeScript

- ESLint 규칙을 따릅니다
- Prettier로 포맷팅합니다
- 의미 있는 변수명을 사용합니다

### React

- Functional Components와 Hooks를 사용합니다
- Props는 TypeScript로 타입을 정의합니다
- Custom Hooks는 `use` 접두사를 사용합니다

### CSS

- BEM 네이밍 컨벤션을 사용합니다 (CSS Modules 제외)
- 모바일 퍼스트 접근을 사용합니다

## 문서화

- 모든 공개 함수와 컴포넌트에 JSDoc을 작성합니다
- README는 한국어로 작성합니다
- 복잡한 로직에는 주석을 추가합니다

## 테스트

- 단위 테스트를 작성합니다
- 커버리지는 70% 이상을 유지합니다
- Edge case를 테스트합니다

## 질문이 있나요?

- GitHub Issues를 통해 질문해주세요
- 디스커션 탭을 활용해주세요

다시 한번 기여해주셔서 감사합니다! 🙏
