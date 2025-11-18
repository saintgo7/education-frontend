// Todo 타입
export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}

// User 타입
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
}

// Theme 타입
export type Theme = 'light' | 'dark';

// Filter 타입
export type TodoFilter = 'all' | 'active' | 'completed';

// Sort 타입
export type TodoSort = 'createdAt' | 'priority' | 'title';
