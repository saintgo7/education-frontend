# Tailwind Components - UI 컴포넌트 라이브러리

[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![Storybook](https://img.shields.io/badge/Storybook-7.6-FF4785.svg)](https://storybook.js.org/)

> 재사용 가능한 Tailwind CSS 컴포넌트 라이브러리

## 🎯 프로젝트 소개

Tailwind CSS와 Headless UI를 활용한 컴포넌트 라이브러리입니다.

### 주요 내용

- 🎨 **Tailwind Patterns**: 고급 Tailwind 패턴
- 🧩 **Headless Components**: Headless UI 활용
- 📚 **Storybook**: 컴포넌트 문서화
- ♿ **Accessibility**: 접근성 모범 사례
- 🎯 **Variants**: Variant 기반 설계
- 📦 **NPM Package**: 패키지 배포

## 🚀 시작하기

```bash
pnpm install
pnpm dev
pnpm storybook
```

## 💡 컴포넌트 예시

### Button

```tsx
<Button variant="primary" size="lg">
  클릭하세요
</Button>
```

### Modal

```tsx
<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <Modal.Title>제목</Modal.Title>
  <Modal.Body>내용</Modal.Body>
</Modal>
```

## 📄 라이선스

MIT License

---

**Happy Coding! 🚀**
