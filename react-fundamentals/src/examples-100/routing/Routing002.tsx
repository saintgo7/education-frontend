import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Routing Example 2
 * 간단한 클라이언트 사이드 라우팅 구현
 */

interface Route2 {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

interface RouterContext2 {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext2 = createContext<RouterContext2 | undefined>(undefined);

export function Router2({ children }: { children: ReactNode }) {
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
    <RouterContext2.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext2.Provider>
  );
}

export function useRouter2() {
  const context = useContext(RouterContext2);
  if (!context) {
    throw new Error('useRouter2 must be used within Router2');
  }
  return context;
}

export function Route2({ path, component: Component, exact = false }: Route2) {
  const { currentPath } = useRouter2();
  
  const isMatch = exact
    ? currentPath === path
    : currentPath.startsWith(path);

  return isMatch ? <Component /> : null;
}

export function Link2({ to, children }: { to: string; children: ReactNode }) {
  const { navigate } = useRouter2();

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
const Home2 = () => <div><h2>Home Page 2</h2></div>;
const About2 = () => <div><h2>About Page 2</h2></div>;
const Contact2 = () => <div><h2>Contact Page 2</h2></div>;

export function RoutingDemo2() {
  return (
    <Router2>
      <div className="routing-demo-2">
        <h3>Routing Example 2</h3>
        
        <nav>
          <Link2 to="/">Home</Link2>
          <Link2 to="/about">About</Link2>
          <Link2 to="/contact">Contact</Link2>
        </nav>

        <div className="route-content">
          <Route2 path="/" component={Home2} exact />
          <Route2 path="/about" component={About2} />
          <Route2 path="/contact" component={Contact2} />
        </div>
      </div>
    </Router2>
  );
}

export default RoutingDemo2;
