import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Routing Example 1
 * 간단한 클라이언트 사이드 라우팅 구현
 */

interface Route1 {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

interface RouterContext1 {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext1 = createContext<RouterContext1 | undefined>(undefined);

export function Router1({ children }: { children: ReactNode }) {
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
    <RouterContext1.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext1.Provider>
  );
}

export function useRouter1() {
  const context = useContext(RouterContext1);
  if (!context) {
    throw new Error('useRouter1 must be used within Router1');
  }
  return context;
}

export function Route1({ path, component: Component, exact = false }: Route1) {
  const { currentPath } = useRouter1();
  
  const isMatch = exact
    ? currentPath === path
    : currentPath.startsWith(path);

  return isMatch ? <Component /> : null;
}

export function Link1({ to, children }: { to: string; children: ReactNode }) {
  const { navigate } = useRouter1();

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
const Home1 = () => <div><h2>Home Page 1</h2></div>;
const About1 = () => <div><h2>About Page 1</h2></div>;
const Contact1 = () => <div><h2>Contact Page 1</h2></div>;

export function RoutingDemo1() {
  return (
    <Router1>
      <div className="routing-demo-1">
        <h3>Routing Example 1</h3>
        
        <nav>
          <Link1 to="/">Home</Link1>
          <Link1 to="/about">About</Link1>
          <Link1 to="/contact">Contact</Link1>
        </nav>

        <div className="route-content">
          <Route1 path="/" component={Home1} exact />
          <Route1 path="/about" component={About1} />
          <Route1 path="/contact" component={Contact1} />
        </div>
      </div>
    </Router1>
  );
}

export default RoutingDemo1;
