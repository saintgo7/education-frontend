import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Routing Example 3
 * 간단한 클라이언트 사이드 라우팅 구현
 */

interface Route3 {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

interface RouterContext3 {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext3 = createContext<RouterContext3 | undefined>(undefined);

export function Router3({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext3.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext3.Provider>
  );
}

export function useRouter3() {
  const context = useContext(RouterContext3);
  if (!context) {
    throw new Error('useRouter3 must be used within Router3');
  }
  return context;
}

export function Route3({ path, component: Component, exact = false }: Route3) {
  const { currentPath } = useRouter3();
  
  const isMatch = exact
    ? currentPath === path
    : currentPath.startsWith(path);

  return isMatch ? <Component /> : null;
}

export function Link3({ to, children }: { to: string; children: ReactNode }) {
  const { navigate } = useRouter3();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

// Example components
const Home3 = () => <div><h2>Home Page 3</h2></div>;
const About3 = () => <div><h2>About Page 3</h2></div>;
const Contact3 = () => <div><h2>Contact Page 3</h2></div>;

export function RoutingDemo3() {
  return (
    <Router3>
      <div className="routing-demo-3">
        <h3>Routing Example 3</h3>
        
        <nav>
          <Link3 to="/">Home</Link3>
          <Link3 to="/about">About</Link3>
          <Link3 to="/contact">Contact</Link3>
        </nav>

        <div className="route-content">
          <Route3 path="/" component={Home3} exact />
          <Route3 path="/about" component={About3} />
          <Route3 path="/contact" component={Contact3} />
        </div>
      </div>
    </Router3>
  );
}

export default RoutingDemo3;
