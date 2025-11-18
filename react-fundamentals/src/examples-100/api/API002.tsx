import React, { useState, useEffect, useCallback } from 'react';

/**
 * API Example 2
 * API 통신, 에러 처리, 로딩 상태 관리 예제
 */

interface User2 {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface APIState2<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function API2() {
  const [users, setUsers] = useState<APIState2<User2[]>>({
    data: null,
    loading: false,
    error: null,
  });

  const [selectedUser, setSelectedUser] = useState<APIState2<User2>>({
    data: null,
    loading: false,
    error: null,
  });

  // Fetch all users
  const fetchUsers = useCallback(async () => {
    setUsers({ data: null, loading: true, error: null });
    
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUsers: User2[] = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        role: i % 2 === 0 ? 'admin' : 'user',
      }));

      setUsers({ data: mockUsers, loading: false, error: null });
    } catch (error) {
      setUsers({
        data: null,
        loading: false,
        error: error instanceof Error ? error : new Error('Unknown error'),
      });
    }
  }, []);

  // Fetch single user
  const fetchUser = useCallback(async (id: number) => {
    setSelectedUser({ data: null, loading: true, error: null });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const user: User2 = {
        id,
        name: `User ${id}`,
        email: `user${id}@example.com`,
        role: id % 2 === 0 ? 'admin' : 'user',
      };

      setSelectedUser({ data: user, loading: false, error: null });
    } catch (error) {
      setSelectedUser({
        data: null,
        loading: false,
        error: error instanceof Error ? error : new Error('Unknown error'),
      });
    }
  }, []);

  // Create user
  const createUser = useCallback(async (name: string, email: string) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const newUser: User2 = {
        id: Date.now(),
        name,
        email,
        role: 'user',
      };

      setUsers(prev => ({
        ...prev,
        data: prev.data ? [...prev.data, newUser] : [newUser],
      }));
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  }, []);

  // Delete user
  const deleteUser = useCallback(async (id: number) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setUsers(prev => ({
        ...prev,
        data: prev.data ? prev.data.filter(u => u.id !== id) : null,
      }));
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="api-demo-2">
      <h3>API Example 2</h3>

      <div className="section">
        <h4>All Users</h4>
        {users.loading && <p>Loading users...</p>}
        {users.error && <p className="error">Error: {users.error.message}</p>}
        {users.data && (
          <ul>
            {users.data.map(user => (
              <li key={user.id}>
                {user.name} ({user.email})
                <button onClick={() => fetchUser(user.id)}>View</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={fetchUsers}>Refresh</button>
      </div>

      <div className="section">
        <h4>Selected User</h4>
        {selectedUser.loading && <p>Loading user...</p>}
        {selectedUser.error && <p className="error">Error: {selectedUser.error.message}</p>}
        {selectedUser.data && (
          <div className="user-details">
            <p>ID: {selectedUser.data.id}</p>
            <p>Name: {selectedUser.data.name}</p>
            <p>Email: {selectedUser.data.email}</p>
            <p>Role: {selectedUser.data.role}</p>
          </div>
        )}
      </div>

      <div className="section">
        <h4>Create User</h4>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          createUser(
            formData.get('name') as string,
            formData.get('email') as string
          );
          e.currentTarget.reset();
        }}>
          <input name="name" placeholder="Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}

export default API2;
