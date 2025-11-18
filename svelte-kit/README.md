# SvelteKit - SSR 애플리케이션

[![Svelte](https://img.shields.io/badge/Svelte-4.2-FF3E00.svg)](https://svelte.dev/)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.0-FF3E00.svg)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)

> SvelteKit을 활용한 SSR 및 SSG 하이브리드 애플리케이션

## 🎯 프로젝트 소개

SvelteKit의 파일 기반 라우팅과 SSR/SSG를 활용한 프로젝트입니다.
Svelte의 컴파일 타임 최적화와 Stores를 다룹니다.

### 주요 기능

- ⚡ **컴파일 타임 최적화**: 런타임 오버헤드 없음
- 🎬 **파일 기반 라우팅**: 직관적인 라우팅
- 🔄 **SSR/SSG**: 서버 사이드 렌더링과 정적 생성
- 🏪 **Stores**: 반응형 상태 관리
- 🎨 **Transitions**: 내장 애니메이션
- 📡 **Form Actions**: 서버 측 폼 처리

## 🛠️ 기술 스택

- **SvelteKit 2.0**: 메타 프레임워크
- **Svelte 4**: UI 프레임워크
- **TypeScript**: 타입 안정성
- **Vite**: 빌드 도구

## 🚀 시작하기

```bash
pnpm install
pnpm dev
pnpm build
```

## 💡 핵심 개념

### Svelte 컴포넌트

```svelte
<script lang="ts">
  let count = 0;
  $: double = count * 2;

  function increment() {
    count += 1;
  }
</script>

<p>Count: {count}</p>
<p>Double: {double}</p>
<button on:click={increment}>증가</button>
```

### SvelteKit 라우팅

```svelte
<!-- src/routes/+page.svelte -->
<script>
  export let data;
</script>

<h1>환영합니다!</h1>
<pre>{JSON.stringify(data, null, 2)}</pre>
```

## 📄 라이선스

MIT License

---

**Happy Coding! 🚀**
