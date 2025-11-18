# Tailwind Components - 전체 예제 목록 (60+)

## 📚 전체 예제 색인

### 1. 기본 컴포넌트 (15개)
- ✅ **Button** - 버튼 (10가지 변형)
- ✅ **Input** - 입력 필드
- ✅ **Checkbox** - 체크박스
- ✅ **Radio** - 라디오 버튼
- ✅ **Select** - 선택 박스
- ✅ **Textarea** - 텍스트 영역
- ✅ **Toggle** - 토글 스위치
- ✅ **Badge** - 뱃지
- ✅ **Avatar** - 아바타
- ✅ **Tag** - 태그
- ✅ **Label** - 레이블
- ✅ **Link** - 링크
- ✅ **Divider** - 구분선
- ✅ **Icon** - 아이콘
- ✅ **Spinner** - 스피너

### 2. 레이아웃 (10개)
- ✅ **Container** - 컨테이너
- ✅ **Grid** - 그리드
- ✅ **Flexbox** - 플렉스박스
- ✅ **Stack** - 스택
- ✅ **AspectRatio** - 종횡비
- ✅ **Center** - 중앙 정렬
- ✅ **Spacer** - 간격
- ✅ **Wrap** - 래핑
- ✅ **Columns** - 컬럼
- ✅ **Masonry** - 메이슨리

### 3. 네비게이션 (8개)
- ✅ **Navbar** - 네비게이션 바
- ✅ **Breadcrumb** - 브레드크럼
- ✅ **Tabs** - 탭
- ✅ **Pagination** - 페이지네이션
- ✅ **Sidebar** - 사이드바
- ✅ **Menu** - 메뉴
- ✅ **Steps** - 스텝
- ✅ **Footer** - 푸터

### 4. 오버레이 (7개)
- ✅ **Modal** - 모달
- ✅ **Drawer** - 드로어
- ✅ **Popover** - 팝오버
- ✅ **Tooltip** - 툴팁
- ✅ **Alert** - 알림
- ✅ **Toast** - 토스트
- ✅ **Dialog** - 다이얼로그

### 5. 데이터 표시 (10개)
- ✅ **Card** - 카드
- ✅ **Table** - 테이블
- ✅ **List** - 리스트
- ✅ **Timeline** - 타임라인
- ✅ **Stats** - 통계
- ✅ **Pricing** - 가격표
- ✅ **Testimonial** - 후기
- ✅ **Profile** - 프로필
- ✅ **Feature** - 기능 소개
- ✅ **Hero** - 히어로 섹션

### 6. 피드백 (5개)
- ✅ **Progress** - 진행률
- ✅ **Skeleton** - 스켈레톤
- ✅ **EmptyState** - 빈 상태
- ✅ **Error** - 에러 상태
- ✅ **Loading** - 로딩

### 7. 고급 컴포넌트 (5개)
- ✅ **Carousel** - 캐러셀
- ✅ **Accordion** - 아코디언
- ✅ **Calendar** - 캘린더
- ✅ **DatePicker** - 날짜 선택
- ✅ **FileUpload** - 파일 업로드

## 🎯 총 60개 예제

## 💡 Tailwind 패턴

### Dark Mode
\`\`\`html
<div class="bg-white dark:bg-gray-800">
  <p class="text-gray-900 dark:text-white">
    Content
  </p>
</div>
\`\`\`

### Responsive Design
\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- 모바일: 1열, 태블릿: 2열, 데스크톱: 3열 -->
</div>
\`\`\`

### Hover Effects
\`\`\`html
<button class="transition hover:scale-105 hover:shadow-lg">
  Hover me
</button>
\`\`\`

### Custom Components
\`\`\`css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }
}
\`\`\`
