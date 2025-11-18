# Vue 3 Composition API - 현대적인 Vue 개발

[![Vue](https://img.shields.io/badge/Vue-3.4-4FC08D.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)](https://vitejs.dev/)

> Vue 3 Composition API와 Script Setup으로 구축한 현대적인 애플리케이션

## 🎯 프로젝트 소개

Vue 3의 Composition API를 활용한 실전 프로젝트입니다.
`<script setup>` 문법과 Pinia 상태 관리, VueUse 유틸리티를 다룹니다.

### 주요 기능

- ⚡ **Composition API**: 로직 재사용과 코드 조직화
- 🏪 **Pinia**: Vue 3를 위한 공식 상태 관리
- 🛣️ **Vue Router 4**: 타입 안전한 라우팅
- 🎨 **Transition**: 부드러운 애니메이션
- 🔧 **VueUse**: 유용한 Composition 유틸리티
- 📦 **Vite**: 빠른 개발 환경

## 🛠️ 기술 스택

- **Vue 3.4**: Composition API, Script Setup
- **TypeScript**: 타입 안정성
- **Pinia**: 상태 관리
- **Vue Router 4**: 라우팅
- **Vite**: 빌드 도구
- **Vitest**: 테스팅 프레임워크

## 🚀 시작하기

```bash
# 설치
pnpm install

# 개발 서버 (http://localhost:5173)
pnpm dev

# 프로덕션 빌드
pnpm build

# 테스트
pnpm test
```

## 💡 핵심 개념

### Composition API

```vue
<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const count = ref(0);
const double = computed(() => count.value * 2);

watch(count, (newValue) => {
  console.log('Count changed:', newValue);
});

function increment() {
  count.value++;
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ double }}</p>
    <button @click="increment">증가</button>
  </div>
</template>
```

### Pinia Store

```ts
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([]);

  const completedTodos = computed(() =>
    todos.value.filter(t => t.completed)
  );

  function addTodo(todo: Todo) {
    todos.value.push(todo);
  }

  return { todos, completedTodos, addTodo };
});
```

## 📄 라이선스

MIT License

---

**Happy Coding! 🚀**
