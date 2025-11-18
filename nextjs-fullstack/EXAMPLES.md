# Next.js Fullstack - 전체 예제 목록 (40+)

## 📚 전체 예제 색인

### 1. App Router & 라우팅 (8개)
- ✅ **FileBasedRouting** - 파일 기반 라우팅 시스템
- ✅ **DynamicRoutes** - 동적 라우트 (params)
- ✅ **ParallelRoutes** - 병렬 라우트 (@folder)
- ✅ **InterceptingRoutes** - 가로채기 라우트
- ✅ **RouteGroups** - 라우트 그룹 (folder)
- ✅ **CatchAllRoutes** - 캐치올 라우트 ([...slug])
- ✅ **OptionalCatchAll** - 옵셔널 캐치올 ([[...slug]])
- ✅ **RouteHandlers** - 라우트 핸들러 (route.ts)

### 2. Server Components & Actions (7개)
- ✅ **ServerComponents** - React Server Components
- ✅ **ClientComponents** - 클라이언트 컴포넌트
- ✅ **ServerActions** - Server Actions (form actions)
- ✅ **StreamingSSR** - 스트리밍 SSR
- ✅ **Suspense** - React Suspense
- ✅ **LoadingUI** - loading.tsx
- ✅ **ErrorHandling** - error.tsx, not-found.tsx

### 3. 데이터 페칭 (6개)
- ✅ **ServerFetch** - 서버에서 데이터 페칭
- ✅ **ParallelData** - 병렬 데이터 로딩
- ✅ **SequentialData** - 순차 데이터 로딩
- ✅ **CachedFetch** - fetch 캐싱
- ✅ **Revalidation** - 재검증 (ISR)
- ✅ **StaticGeneration** - 정적 생성 (SSG)

### 4. Middleware & Headers (4개)
- ✅ **Middleware** - 미들웨어 패턴
- ✅ **Authentication** - 인증 미들웨어
- ✅ **Redirects** - 리다이렉트
- ✅ **Headers** - 커스텀 헤더

### 5. API Routes (5개)
- ✅ **RestAPI** - REST API 엔드포인트
- ✅ **RouteHandlers** - 새로운 Route Handlers
- ✅ **RequestResponse** - Request/Response 처리
- ✅ **CORS** - CORS 설정
- ✅ **RateLimiting** - 속도 제한

### 6. 데이터베이스 & ORM (4개)
- ✅ **PrismaSetup** - Prisma 설정
- ✅ **CRUD** - Create, Read, Update, Delete
- ✅ **Relations** - 관계 설정
- ✅ **Transactions** - 트랜잭션

### 7. 인증 & 보안 (3개)
- ✅ **NextAuth** - NextAuth.js 통합
- ✅ **JWT** - JWT 인증
- ✅ **OAuth** - OAuth 제공자

### 8. 이미지 & 최적화 (3개)
- ✅ **ImageOptimization** - next/image
- ✅ **FontOptimization** - next/font
- ✅ **ScriptOptimization** - next/script

## 🎯 난이도별 학습 경로

### 초급 (1-2주)
1. App Router 기본
2. 파일 기반 라우팅
3. Server/Client Components

### 중급 (3-4주)
1. Server Actions
2. 데이터 페칭
3. API Routes
4. 인증

### 고급 (5-6주)
1. Middleware
2. 성능 최적화
3. 데이터베이스 통합
4. 프로덕션 배포

## 📝 상세 예제

### App Router 예제

#### 1. Dynamic Routes
\`\`\`typescript
// app/blog/[slug]/page.tsx
export default async function BlogPost({
  params
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug);
  return <article>{post.content}</article>;
}

// 정적 생성
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
\`\`\`

#### 2. Server Actions
\`\`\`typescript
// app/actions.ts
'use server'

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');

  await db.post.create({
    data: { title, content }
  });

  revalidatePath('/blog');
}

// app/new-post/page.tsx
import { createPost } from '../actions';

export default function NewPost() {
  return (
    <form action={createPost}>
      <input name="title" />
      <textarea name="content" />
      <button type="submit">Create</button>
    </form>
  );
}
\`\`\`

#### 3. Parallel Routes
\`\`\`typescript
// app/dashboard/layout.tsx
export default function Layout({
  children,
  analytics,
  team
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <>
      {children}
      {analytics}
      {team}
    </>
  );
}

// app/dashboard/@analytics/page.tsx
// app/dashboard/@team/page.tsx
\`\`\`

#### 4. Streaming with Suspense
\`\`\`typescript
// app/dashboard/page.tsx
import { Suspense } from 'react';

async function Analytics() {
  const data = await fetchAnalytics(); // 느린 요청
  return <div>{data}</div>;
}

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<div>Loading analytics...</div>}>
        <Analytics />
      </Suspense>
    </div>
  );
}
\`\`\`

### Middleware 예제

\`\`\`typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 인증 확인
  const token = request.cookies.get('token');

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 커스텀 헤더 추가
  const response = NextResponse.next();
  response.headers.set('x-custom-header', 'value');

  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*']
};
\`\`\`

### API Route 예제

\`\`\`typescript
// app/api/posts/route.ts
import { NextResponse } from 'next/server';

// GET /api/posts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';

  const posts = await db.post.findMany({
    skip: (Number(page) - 1) * 10,
    take: 10
  });

  return NextResponse.json(posts);
}

// POST /api/posts
export async function POST(request: Request) {
  const body = await request.json();

  const post = await db.post.create({
    data: body
  });

  return NextResponse.json(post, { status: 201 });
}
\`\`\`

### 캐싱 & 재검증 예제

\`\`\`typescript
// 정적 생성 (기본)
async function StaticPage() {
  const data = await fetch('https://api.example.com/data');
  return <div>{data}</div>;
}

// ISR (Incremental Static Regeneration)
async function ISRPage() {
  const data = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // 1시간마다 재검증
  });
  return <div>{data}</div>;
}

// 동적 렌더링
async function DynamicPage() {
  const data = await fetch('https://api.example.com/data', {
    cache: 'no-store' // 매 요청마다 새로 가져옴
  });
  return <div>{data}</div>;
}

// 수동 재검증
import { revalidatePath, revalidateTag } from 'next/cache';

export async function updatePost() {
  'use server';

  await db.post.update({...});

  revalidatePath('/blog');
  revalidateTag('posts');
}
\`\`\`

## 🛠️ 프로젝트 구조

\`\`\`
nextjs-fullstack/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/
│   │   ├── @analytics/
│   │   ├── @team/
│   │   └── layout.tsx
│   ├── api/
│   │   ├── auth/
│   │   ├── posts/
│   │   └── users/
│   ├── blog/
│   │   └── [slug]/
│   ├── examples/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── middleware.ts
├── prisma/
│   └── schema.prisma
├── public/
├── lib/
│   ├── db.ts
│   └── auth.ts
└── next.config.js
\`\`\`

## 💡 Best Practices

1. **Server Components First** - 기본적으로 Server Components 사용
2. **Client Components는 필요할 때만** - 'use client'는 최소화
3. **데이터 페칭은 서버에서** - Server Components나 Server Actions 활용
4. **캐싱 전략** - 적절한 캐싱으로 성능 향상
5. **Error Boundaries** - error.tsx로 에러 처리
6. **Loading States** - loading.tsx로 로딩 UI
7. **Metadata** - SEO를 위한 메타데이터 설정
8. **Image Optimization** - next/image 사용
9. **Font Optimization** - next/font 사용
10. **환경 변수** - .env.local로 민감 정보 관리
