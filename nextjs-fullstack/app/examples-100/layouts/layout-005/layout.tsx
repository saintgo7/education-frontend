import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Layout 5',
    default: 'Layout Example 5',
  },
  description: 'Next.js Layout Example 5',
};

/**
 * Layout Example 5
 * Nested layout with shared UI elements
 */

interface LayoutProps {
  children: React.ReactNode;
  params: { slug?: string };
}

export default function Layout5({ children, params }: LayoutProps) {
  return (
    <div className="layout-5">
      <header className="layout-header">
        <h1>Layout 5</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <aside className="layout-sidebar">
        <h3>Sidebar 5</h3>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </aside>

      <main className="layout-main">
        {children}
      </main>

      <footer className="layout-footer">
        <p>Layout 5 Footer - © 2024</p>
      </footer>
    </div>
  );
}
