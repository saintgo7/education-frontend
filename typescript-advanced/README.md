# TypeScript Advanced - 고급 TypeScript 패턴

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)

> 고급 TypeScript 패턴과 타입 시스템 완전 정복

## 🎯 프로젝트 소개

TypeScript의 고급 기능과 패턴을 학습합니다.
Generics, Utility Types, Decorators 등을 다룹니다.

### 주요 내용

- 🎯 **Generics**: 제네릭과 타입 추론
- 🔧 **Utility Types**: 유틸리티 타입과 Mapped Types
- 🏗️ **Conditional Types**: 조건부 타입
- 📝 **Template Literal Types**: 템플릿 리터럴 타입
- 🎪 **Decorators**: 데코레이터와 메타데이터
- 🔄 **Type Guards**: 타입 가드와 Narrowing
- 📦 **모듈 시스템**: 선언 파일

## 🛠️ 기술 스택

- **TypeScript 5.3**: 최신 TypeScript
- **ts-node**: TypeScript 실행
- **Jest**: 테스팅

## 🚀 시작하기

```bash
pnpm install
pnpm dev
pnpm test
```

## 💡 핵심 개념

### Generics

```typescript
function identity<T>(value: T): T {
  return value;
}

class Box<T> {
  constructor(public value: T) {}

  map<U>(fn: (value: T) => U): Box<U> {
    return new Box(fn(this.value));
  }
}
```

### Utility Types

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type UserWithoutId = Omit<User, 'id'>;
type UserIdAndName = Pick<User, 'id' | 'name'>;
```

## 📄 라이선스

MIT License

---

**Happy Coding! 🚀**
