import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Example 20',
  description: 'Next.js App Router Page Example 20',
};

interface PageProps {
  params: { id?: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

/**
 * Page Example 20
 * Next.js 14 App Router 페이지 예제
 */
export default async function Page20({ params, searchParams }: PageProps) {
  // Async data fetching in Server Component
  const data = await fetch(`https://api.example.com/data/20`, {
    next: { revalidate: 3600 },
  }).then(res => res.json()).catch(() => ({ items: [] }));

  return (
    <div className="page-20">
      <h1>Page Example 20</h1>
      <p>Search params: {JSON.stringify(searchParams)}</p>
      
      <div className="content">
        <h2>Server-side Data</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>

      <div className="features">
        <h3>Features Demonstrated:</h3>
        <ul>
          <li>App Router file-based routing</li>
          <li>Server Component data fetching</li>
          <li>TypeScript type safety</li>
          <li>Metadata API</li>
          <li>ISR with revalidate</li>
        </ul>
      </div>
    </div>
  );
}
