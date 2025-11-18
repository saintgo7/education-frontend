# Vanilla JavaScript Patterns - 전체 예제 목록 (50+)

## 📚 전체 예제 색인

### 1. 디자인 패턴 (15개)
- ✅ **Singleton** - 싱글톤
- ✅ **Factory** - 팩토리
- ✅ **Abstract Factory** - 추상 팩토리
- ✅ **Builder** - 빌더
- ✅ **Prototype** - 프로토타입
- ✅ **Observer** - 옵저버
- ✅ **PubSub** - 발행/구독
- ✅ **Strategy** - 전략
- ✅ **Command** - 커맨드
- ✅ **Decorator** - 데코레이터
- ✅ **Facade** - 파사드
- ✅ **Proxy** - 프록시
- ✅ **Module** - 모듈
- ✅ **Mixin** - 믹스인
- ✅ **MVC** - MVC 패턴

### 2. DOM 조작 (10개)
- ✅ **Element Creation** - 요소 생성
- ✅ **Element Selection** - 요소 선택
- ✅ **Event Delegation** - 이벤트 위임
- ✅ **Custom Events** - 커스텀 이벤트
- ✅ **Virtual DOM** - 가상 DOM
- ✅ **DocumentFragment** - 문서 조각
- ✅ **Mutation Observer** - 변경 관찰
- ✅ **IntersectionObserver** - 교차 관찰
- ✅ **ResizeObserver** - 크기 관찰
- ✅ **ShadowDOM** - 쉐도우 DOM

### 3. 비동기 패턴 (8개)
- ✅ **Callbacks** - 콜백
- ✅ **Promises** - 프로미스
- ✅ **Async/Await** - async/await
- ✅ **Promise.all** - 병렬 실행
- ✅ **Promise.race** - 경쟁
- ✅ **Generators** - 제너레이터
- ✅ **Iterators** - 이터레이터
- ✅ **Async Iterators** - 비동기 이터레이터

### 4. 함수형 프로그래밍 (8개)
- ✅ **Pure Functions** - 순수 함수
- ✅ **Immutability** - 불변성
- ✅ **Higher Order Functions** - 고차 함수
- ✅ **Currying** - 커링
- ✅ **Composition** - 함수 조합
- ✅ **Pipe** - 파이프
- ✅ **Partial Application** - 부분 적용
- ✅ **Memoization** - 메모이제이션

### 5. 클래스 & OOP (5개)
- ✅ **Classes** - 클래스
- ✅ **Inheritance** - 상속
- ✅ **Encapsulation** - 캡슐화
- ✅ **Polymorphism** - 다형성
- ✅ **Private Fields** - 프라이빗 필드

### 6. 모듈 시스템 (4개)
- ✅ **ES Modules** - ES 모듈
- ✅ **CommonJS** - CommonJS
- ✅ **AMD** - AMD
- ✅ **UMD** - UMD

## 🎯 총 50개 예제

## 💡 코드 예시

### Observer Pattern
\`\`\`javascript
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(observer => observer !== fn);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}
\`\`\`

### Module Pattern
\`\`\`javascript
const Module = (function() {
  let privateVar = 'private';

  return {
    publicMethod() {
      return privateVar;
    }
  };
})();
\`\`\`

### Debounce
\`\`\`javascript
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
\`\`\`
