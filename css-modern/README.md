# Modern CSS - 최신 CSS 기술

[![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> 최신 CSS 기술과 레이아웃 시스템 마스터하기

## 🎯 프로젝트 소개

CSS Grid, Flexbox, Container Queries 등 최신 CSS 기술을 학습합니다.

### 주요 내용

- 📐 **CSS Grid**: 고급 그리드 레이아웃
- 📦 **Flexbox**: 플렉스박스 마스터
- 📱 **Container Queries**: 컨테이너 쿼리
- 🎨 **Custom Properties**: CSS 변수
- 🎭 **Animations**: CSS 애니메이션
- 🌓 **Dark Mode**: 다크 모드 구현
- 🎯 **CSS-in-JS**: CSS-in-JS 패턴

## 🚀 시작하기

```bash
pnpm install
pnpm dev
```

## 💡 핵심 개념

### CSS Grid

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

### Container Queries

```css
@container (min-width: 400px) {
  .card {
    display: flex;
  }
}
```

## 📄 라이선스

MIT License

---

**Happy Coding! 🚀**
