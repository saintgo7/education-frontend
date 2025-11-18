import { Todo, User } from '@types/index';

export const mockTodos: Todo[] = [
  {
    id: '1',
    title: 'React Hooks 학습하기',
    description: 'useState, useEffect, useContext 등 기본 Hooks를 마스터하기',
    completed: false,
    priority: 'high',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'TypeScript 타입 정의',
    description: '프로젝트의 모든 타입을 명확하게 정의하기',
    completed: true,
    priority: 'medium',
    createdAt: new Date('2024-01-14'),
    updatedAt: new Date('2024-01-16'),
  },
  {
    id: '3',
    title: '테스트 코드 작성',
    description: 'Jest와 React Testing Library로 단위 테스트 작성',
    completed: false,
    priority: 'high',
    createdAt: new Date('2024-01-13'),
    updatedAt: new Date('2024-01-13'),
  },
  {
    id: '4',
    title: 'README 문서화',
    description: '프로젝트 사용법과 학습 가이드 작성',
    completed: false,
    priority: 'low',
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12'),
  },
  {
    id: '5',
    title: 'CI/CD 파이프라인 구축',
    description: 'GitHub Actions로 자동화된 테스트와 배포 설정',
    completed: true,
    priority: 'medium',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-17'),
  },
];

export const mockUser: User = {
  id: 'user-1',
  name: '김철수',
  email: 'chulsoo@example.com',
  avatar: 'https://i.pravatar.cc/150?img=1',
  role: 'user',
};

export const mockUsers: User[] = [
  mockUser,
  {
    id: 'user-2',
    name: '이영희',
    email: 'younghee@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    role: 'admin',
  },
  {
    id: 'user-3',
    name: '박지성',
    email: 'jisung@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    role: 'user',
  },
];
