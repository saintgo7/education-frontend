import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Routing Example 4
 * 간단한 클라이언트 사이드 라우팅 구현
 */

interface Route4 {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

interface RouterContext4 {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext4 = createContext<RouterContext4 | undefined>(undefined);

export function Router4({ children }: { children: ReactNode }) {
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
    <RouterContext4.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext4.Provider>
  );
}

export function useRouter4() {
  const context = useContext(RouterContext4);
  if (!context) {
    throw new Error('useRouter4 must be used within Router4');
  }
  return context;
}

export function Route4({ path, component: Component, exact = false }: Route4) {
  const { currentPath } = useRouter4();
  
  const isMatch = exact
    ? currentPath === path
    : currentPath.startsWith(path);

  return isMatch ? <Component /> : null;
}

export function Link4({ to, children }: { to: string; children: ReactNode }) {
  const { navigate } = useRouter4();

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
const Home4 = () => <div><h2>Home Page 4</h2></div>;
const About4 = () => <div><h2>About Page 4</h2></div>;
const Contact4 = () => <div><h2>Contact Page 4</h2></div>;

export function RoutingDemo4() {
  return (
    <Router4>
      <div className="routing-demo-4">
        <h3>Routing Example 4</h3>
        
        <nav>
          <Link4 to="/">Home</Link4>
          <Link4 to="/about">About</Link4>
          <Link4 to="/contact">Contact</Link4>
        </nav>

        <div className="route-content">
          <Route4 path="/" component={Home4} exact />
          <Route4 path="/about" component={About4} />
          <Route4 path="/contact" component={Contact4} />
        </div>
      </div>
    </Router4>
  );
}

export default RoutingDemo4;
