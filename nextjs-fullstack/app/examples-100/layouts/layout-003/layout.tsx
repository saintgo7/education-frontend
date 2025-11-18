import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Layout 3',
    default: 'Layout Example 3',
  },
  description: 'Next.js Layout Example 3',
};

/**
 * Layout Example 3
 * Nested layout with shared UI elements
 */

interface LayoutProps {
  children: React.ReactNode;
  params: { slug?: string };
}

export default function Layout3({ children, params }: LayoutProps) {
  return (
    <div className="layout-3">
      <header className="layout-header">
        <h1>Layout 3</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <aside className="layout-sidebar">
        <h3>Sidebar 3</h3>
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
        <p>Layout 3 Footer - © 2024</p>
      </footer>
    </div>
  );
}
