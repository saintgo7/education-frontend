import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Layout 4',
    default: 'Layout Example 4',
  },
  description: 'Next.js Layout Example 4',
};

/**
 * Layout Example 4
 * Nested layout with shared UI elements
 */

interface LayoutProps {
  children: React.ReactNode;
  params: { slug?: string };
}

export default function Layout4({ children, params }: LayoutProps) {
  return (
    <div className="layout-4">
      <header className="layout-header">
        <h1>Layout 4</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <aside className="layout-sidebar">
        <h3>Sidebar 4</h3>
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
        <p>Layout 4 Footer - © 2024</p>
      </footer>
    </div>
  );
}
