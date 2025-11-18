import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Routing Example 5
 * 간단한 클라이언트 사이드 라우팅 구현
 */

interface Route5 {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

interface RouterContext5 {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext5 = createContext<RouterContext5 | undefined>(undefined);

export function Router5({ children }: { children: ReactNode }) {
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
    <RouterContext5.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext5.Provider>
  );
}

export function useRouter5() {
  const context = useContext(RouterContext5);
  if (!context) {
    throw new Error('useRouter5 must be used within Router5');
  }
  return context;
}

export function Route5({ path, component: Component, exact = false }: Route5) {
  const { currentPath } = useRouter5();
  
  const isMatch = exact
    ? currentPath === path
    : currentPath.startsWith(path);

  return isMatch ? <Component /> : null;
}

export function Link5({ to, children }: { to: string; children: ReactNode }) {
  const { navigate } = useRouter5();

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
const Home5 = () => <div><h2>Home Page 5</h2></div>;
const About5 = () => <div><h2>About Page 5</h2></div>;
const Contact5 = () => <div><h2>Contact Page 5</h2></div>;

export function RoutingDemo5() {
  return (
    <Router5>
      <div className="routing-demo-5">
        <h3>Routing Example 5</h3>
        
        <nav>
          <Link5 to="/">Home</Link5>
          <Link5 to="/about">About</Link5>
          <Link5 to="/contact">Contact</Link5>
        </nav>

        <div className="route-content">
          <Route5 path="/" component={Home5} exact />
          <Route5 path="/about" component={About5} />
          <Route5 path="/contact" component={Contact5} />
        </div>
      </div>
    </Router5>
  );
}

export default RoutingDemo5;
