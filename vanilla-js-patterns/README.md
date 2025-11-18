# Vanilla JS Patterns - JavaScript 디자인 패턴

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)](https://vitejs.dev/)

> 프레임워크 없이 배우는 JavaScript 디자인 패턴과 아키텍처

## 🎯 프로젝트 소개

순수 JavaScript로 구현한 다양한 디자인 패턴을 학습합니다.
MVC, Observer, Module 패턴 등 실전 패턴을 다룹니다.

### 주요 패턴

- 🏗️ **MVC, MVP, MVVM**: 아키텍처 패턴
- 🎯 **Module Pattern**: 캡슐화와 네임스페이스
- 🏭 **Creational Patterns**: Factory, Singleton
- 🎪 **Behavioral Patterns**: Observer, Strategy, Command
- 🔄 **State Management**: 상태 관리 구현
- 🎨 **Virtual DOM**: 가상 DOM 기초

## 🛠️ 기술 스택

- **ES6+**: 최신 JavaScript
- **Vite**: 개발 서버
- **Jest**: 테스팅
- **Webpack**: 번들링

## 🚀 시작하기

```bash
pnpm install
pnpm dev
pnpm test
```

## 💡 핵심 패턴

### Module Pattern

```javascript
const TodoModule = (function() {
  let todos = [];

  function add(todo) {
    todos.push(todo);
  }

  function getAll() {
    return [...todos];
  }

  return {
    add,
    getAll
  };
})();
```

### Observer Pattern

```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(data));
    }
  }
}
```

## 📄 라이선스

MIT License

---

**Happy Coding! 🚀**
