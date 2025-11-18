# Next.js Fullstack - 풀스택 웹 애플리케이션

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.7-2D3748.svg)](https://www.prisma.io/)

> Next.js 14 App Router와 Server Components를 활용한 현대적인 풀스택 애플리케이션

## 📚 목차

- [프로젝트 소개](#프로젝트-소개)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [시작하기](#시작하기)
- [프로젝트 구조](#프로젝트-구조)
- [핵심 개념](#핵심-개념)

## 🎯 프로젝트 소개

Next.js 14의 최신 기능을 활용한 풀스택 애플리케이션입니다.
App Router, Server Components, Server Actions 등 Next.js의 모든 핵심 기능을 다룹니다.

### 주요 기능

- 🚀 **App Router**: 파일 기반 라우팅과 레이아웃
- ⚡ **Server Components**: 서버 사이드 렌더링 최적화
- 🔄 **Server Actions**: 서버 측 데이터 뮤테이션
- 🔐 **NextAuth.js**: 인증 및 세션 관리
- 💾 **Prisma ORM**: 타입 안전한 데이터베이스 쿼리
- 🎨 **Tailwind CSS**: 유틸리티 퍼스트 스타일링
- 📊 **블로그 시스템**: CRUD 작업 예제

## 🛠️ 기술 스택

### 프론트엔드
- **Next.js 14**: React 메타 프레임워크
- **React 18**: Server Components 지원
- **TypeScript**: 타입 안정성
- **Tailwind CSS**: 유틸리티 CSS 프레임워크

### 백엔드
- **Next.js API Routes**: RESTful API
- **Server Actions**: 서버 측 함수
- **Prisma**: ORM 및 마이그레이션
- **PostgreSQL**: 관계형 데이터베이스 (또는 SQLite)

### 인증
- **NextAuth.js**: 인증 솔루션
- **bcryptjs**: 비밀번호 해싱

### 검증
- **Zod**: 스키마 검증

## 🚀 시작하기

### 필수 요구사항

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- PostgreSQL (또는 SQLite)

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 환경 변수 설정
cp .env.example .env

# 데이터베이스 스키마 생성
pnpm db:push

# 개발 서버 시작
pnpm dev
```

### 환경 변수

`.env` 파일에 다음 변수들을 설정하세요:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/nextjs_fullstack"
# 또는 SQLite 사용
# DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OAuth (선택사항)
GITHUB_ID="your-github-oauth-id"
GITHUB_SECRET="your-github-oauth-secret"
```

### Docker로 실행

```bash
# 데이터베이스 포함 전체 스택 실행
docker-compose up

# 앱만 실행
docker-compose up app
```

## 📁 프로젝트 구조

```
nextjs-fullstack/
├── app/                      # Next.js App Router
│   ├── (auth)/              # 인증 관련 라우트
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/         # 대시보드 레이아웃
│   │   ├── posts/
│   │   └── profile/
│   ├── api/                 # API Routes
│   │   ├── auth/
│   │   └── posts/
│   ├── layout.tsx           # 루트 레이아웃
│   └── page.tsx             # 홈 페이지
├── components/              # 재사용 컴포넌트
│   ├── ui/                 # UI 컴포넌트
│   └── forms/              # 폼 컴포넌트
├── lib/                     # 유틸리티 및 설정
│   ├── auth.ts             # NextAuth 설정
│   ├── db.ts               # Prisma 클라이언트
│   └── validations.ts      # Zod 스키마
├── prisma/                  # Prisma 설정
│   ├── schema.prisma       # 데이터베이스 스키마
│   └── seed.ts             # 시드 데이터
├── public/                  # 정적 파일
├── types/                   # TypeScript 타입
├── next.config.js          # Next.js 설정
├── tailwind.config.js      # Tailwind 설정
├── Dockerfile
└── docker-compose.yml
```

## 💡 핵심 개념

### 1. App Router

Next.js 14의 새로운 라우팅 시스템:

```tsx
// app/posts/[id]/page.tsx
export default async function PostPage({
  params
}: {
  params: { id: string }
}) {
  const post = await getPost(params.id);

  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}
```

### 2. Server Components

서버에서 렌더링되는 컴포넌트:

```tsx
// app/posts/page.tsx (Server Component)
import { prisma } from '@/lib/db';

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
```

### 3. Server Actions

서버 측 데이터 뮤테이션:

```tsx
// app/actions.ts
'use server'

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  const post = await prisma.post.create({
    data: { title, content }
  });

  revalidatePath('/posts');
  return { success: true, post };
}
```

### 4. Prisma Schema

```prisma
// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### 5. NextAuth 설정

```ts
// lib/auth.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from './db';
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user) {
          return null;
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
};
```

## 🧪 테스트

```bash
# 모든 테스트 실행
pnpm test

# Watch 모드
pnpm test:watch

# 커버리지
pnpm test:coverage
```

## 📚 학습 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Prisma 문서](https://www.prisma.io/docs)
- [NextAuth.js 문서](https://next-auth.js.org/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)

## 🤝 기여하기

개선 사항이나 버그를 발견하면 Issue나 Pull Request를 생성해주세요!

## 📄 라이선스

MIT License

---

**Happy Coding! 즐거운 코딩 되세요! 🚀**
