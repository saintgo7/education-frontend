# Angular Enterprise - 엔터프라이즈급 애플리케이션

[![Angular](https://img.shields.io/badge/Angular-17-DD0031.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)
[![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C.svg)](https://rxjs.dev/)

> Angular 17의 Signals와 Standalone Components로 구축한 엔터프라이즈 애플리케이션

## 🎯 프로젝트 소개

Angular 17의 최신 기능을 활용한 엔터프라이즈급 프로젝트입니다.
Signals, Standalone Components, Dependency Injection 등을 다룹니다.

### 주요 기능

- 🎯 **Signals**: 반응형 상태 관리
- 🧩 **Standalone Components**: NgModule 없는 컴포넌트
- 🔧 **Dependency Injection**: 강력한 DI 시스템
- 🛡️ **RxJS**: 반응형 프로그래밍
- 📋 **Reactive Forms**: 타입 안전한 폼
- 🏗️ **Architecture**: 확장 가능한 구조

## 🛠️ 기술 스택

- **Angular 17**: 최신 프레임워크
- **TypeScript**: 타입 안정성
- **RxJS**: 반응형 프로그래밍
- **Standalone API**: 모듈리스 아키텍처

## 🚀 시작하기

```bash
pnpm install
pnpm start
pnpm test
```

## 💡 핵심 개념

### Signals

```typescript
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <p>Count: {{ count() }}</p>
    <p>Double: {{ double() }}</p>
    <button (click)="increment()">증가</button>
  `
})
export class CounterComponent {
  count = signal(0);
  double = computed(() => this.count() * 2);

  increment() {
    this.count.update(v => v + 1);
  }
}
```

### Standalone Components

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Hello Angular 17!</h1>`
})
export class AppComponent {}
```

## 📄 라이선스

MIT License

---

**Happy Coding! 🚀**
