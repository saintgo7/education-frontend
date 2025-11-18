# React Fundamentals - 전체 예제 목록 (50+)

## 📚 전체 예제 색인

### 1. UI 컴포넌트 (12개)

#### Button (src/examples/ui-components/Button.tsx)
- 기본 버튼, Primary, Secondary, Danger
- 크기: small, medium, large
- 로딩 상태, 비활성화 상태
- 아이콘 버튼

#### Input (src/examples/ui-components/Input.tsx)
- 텍스트 입력, 비밀번호, 이메일, 숫자
- 제어 컴포넌트 / 비제어 컴포넌트
- 검증 상태, 에러 메시지
- Prefix/Suffix 아이콘

#### Modal (src/examples/ui-components/Modal.tsx)
- 기본 모달, 확인/취소 모달
- Portal을 사용한 렌더링
- Backdrop 클릭으로 닫기
- 애니메이션 전환

#### Dropdown (src/examples/ui-components/Dropdown.tsx)
- 단일 선택 드롭다운
- 다중 선택 드롭다운
- 검색 가능한 드롭다운
- 키보드 네비게이션

#### Tabs (src/examples/ui-components/Tabs.tsx)
- 기본 탭
- 제어/비제어 탭
- 지연 로딩 탭 콘텐츠
- 수직/수평 레이아웃

#### Accordion (src/examples/ui-components/Accordion.tsx)
- 단일 확장
- 다중 확장
- 애니메이션 전환
- 제어된 상태

#### Card (src/examples/ui-components/Card.tsx)
- 이미지 카드
- 헤더/바디/푸터 구조
- 호버 효과
- 다양한 레이아웃

#### Badge (src/examples/ui-components/Badge.tsx)
- 알림 뱃지
- 상태 표시
- 색상 변형
- 크기 조절

#### Avatar (src/examples/ui-components/Avatar.tsx)
- 이미지 아바타
- 이니셜 아바타
- 그룹 아바타
- 상태 표시기

#### Tooltip (src/examples/ui-components/Tooltip.tsx)
- 4방향 툴팁
- 지연 표시
- 제어된 툴팁
- 리치 콘텐츠

#### Alert (src/examples/ui-components/Alert.tsx)
- Success, Error, Warning, Info
- 닫기 버튼
- 자동 닫기
- 애니메이션

#### Spinner (src/examples/ui-components/Spinner.tsx)
- 원형 스피너
- 점 스피너
- 바 스피너
- 크기/색상 변형

### 2. 폼 & 검증 (8개)

#### FormValidation
- Yup 검증
- Zod 검증
- 커스텀 검증 규칙
- 실시간/제출 시 검증

#### CustomForm
- useForm 훅
- 필드 등록
- 에러 처리
- 제출 핸들링

#### FileUpload
- 드래그 앤 드롭
- 다중 파일 업로드
- 파일 타입 제한
- 미리보기

#### MultiStepForm
- 단계별 진행
- 진행률 표시
- 이전/다음 네비게이션
- 데이터 유지

#### AutoComplete
- 실시간 검색
- 디바운싱
- 키보드 네비게이션
- 하이라이팅

#### DatePicker
- 날짜 선택
- 범위 선택
- 최소/최대 날짜
- 로케일 지원

#### RichTextEditor
- 텍스트 포맷팅
- 링크 삽입
- 이미지 업로드
- HTML 출력

#### FormWizard
- 마법사 UI
- 조건부 단계
- 검증 체크포인트
- 요약 페이지

### 3. 커스텀 훅 (10개)

#### useDebounce
- 값 디바운싱
- 지연 시간 설정
- 타이머 정리
- TypeScript 제네릭

#### useLocalStorage
- 로컬 스토리지 읽기/쓰기
- JSON 직렬화
- 에러 처리
- 동기화

#### useToggle
- Boolean 토글
- 상태 전환
- 초기값 설정
- 리셋 기능

#### useFetch
- 데이터 페칭
- 로딩 상태
- 에러 처리
- 재시도

#### useIntersectionObserver
- 요소 가시성 감지
- 무한 스크롤
- 지연 로딩
- 루트 마진 설정

#### useMediaQuery
- 반응형 디자인
- 브레이크포인트 감지
- SSR 지원
- 다중 쿼리

#### useClickOutside
- 외부 클릭 감지
- 드롭다운/모달 닫기
- 참조 관리
- 이벤트 리스너

#### useKeyPress
- 키보드 이벤트
- 단축키
- 조합키
- 이벤트 정리

#### usePrevious
- 이전 값 추적
- 비교 로직
- 의존성 관리
- 메모이제이션

#### useTimeout
- setTimeout 래퍼
- 자동 정리
- 재시작
- 취소

### 4. 애니메이션 (6개)

#### FadeIn
- 페이드 인 효과
- CSS 애니메이션
- JS 애니메이션
- 지연 시간

#### SlideIn
- 슬라이드 효과
- 4방향
- 이징 함수
- 순차 애니메이션

#### AnimatedList
- 리스트 애니메이션
- 추가/제거 효과
- Stagger 애니메이션
- 키 관리

#### PageTransition
- 페이지 전환
- 라우터 통합
- 커스텀 전환
- 로딩 상태

#### SkeletonLoader
- 스켈레톤 UI
- 로딩 플레이스홀더
- 펄스 효과
- 커스텀 형태

#### ProgressBar
- 선형 진행률
- 원형 진행률
- 애니메이션
- 레이블

### 5. 성능 최적화 (8개)

#### React.memo
- 컴포넌트 메모이제이션
- Props 비교
- 커스텀 비교 함수
- 사용 시기

#### useMemo
- 값 메모이제이션
- 비용이 큰 계산
- 의존성 배열
- 최적화 팁

#### useCallback
- 함수 메모이제이션
- 자식에게 전달
- 의존성 관리
- 이벤트 핸들러

#### LazyLoading
- React.lazy
- Suspense
- 에러 바운더리
- 로딩 폴백

#### VirtualList
- react-window
- react-virtualized
- 대용량 리스트
- 성능 비교

#### CodeSplitting
- 동적 import
- 라우트 기반 분할
- 컴포넌트 분할
- 번들 분석

#### InfiniteScroll
- 스크롤 감지
- 데이터 로딩
- 로딩 표시
- 에러 처리

#### ImageLazyLoad
- Intersection Observer
- 플레이스홀더
- 점진적 로딩
- 에러 처리

### 6. 디자인 패턴 (6개)

#### CompoundComponents
- 컴포넌트 조합
- Context 공유
- 유연한 API
- 예: Select, Menu

#### RenderProps
- 렌더 함수
- 로직 재사용
- 인라인 렌더
- 예: Mouse Tracker

#### HOC (고차 컴포넌트)
- 컴포넌트 래핑
- Props 주입
- 로직 추상화
- 예: withAuth

#### ControlledUncontrolled
- 제어 컴포넌트
- 비제어 컴포넌트
- 하이브리드 패턴
- 사용 케이스

#### ContainerPresentational
- 로직 분리
- UI 분리
- 재사용성
- 테스트 용이성

#### CustomHooks
- 로직 추출
- 재사용
- 조합
- 네이밍 규칙

## 🎯 난이도별 학습 경로

### 초급 (1-2주)
1. UI 컴포넌트 (Button, Input, Card)
2. 기본 폼 (FormValidation)
3. 간단한 훅 (useToggle, useLocalStorage)

### 중급 (3-4주)
1. 복잡한 컴포넌트 (Modal, Dropdown, Tabs)
2. 고급 폼 (MultiStepForm, AutoComplete)
3. 실용적 훅 (useFetch, useDebounce)
4. 애니메이션

### 고급 (5-6주)
1. 성능 최적화 (memo, useMemo, useCallback)
2. 디자인 패턴 (HOC, RenderProps, Compound)
3. 고급 기능 (VirtualList, CodeSplitting)
4. 실전 프로젝트

## 📝 각 예제의 학습 포인트

모든 예제는 다음을 포함합니다:
- ✅ TypeScript 타입 정의
- ✅ JSDoc 문서화
- ✅ 단위 테스트
- ✅ 사용 예시
- ✅ Best Practices
- ✅ 일반적인 실수와 해결방법
