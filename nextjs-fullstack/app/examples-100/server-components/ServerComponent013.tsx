import { Suspense } from 'react';
import { headers, cookies } from 'next/headers';

/**
 * Server Component Example 13
 * Next.js Server Component with async data fetching
 */

interface Data13 {
  id: number;
  title: string;
  content: string;
  timestamp: number;
}

async function fetchData13(): Promise<Data13[]> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return Array.from({ length: 10 }, (_, index) => ({
    id: 13 * 100 + index,
    title: `Item ${index + 1}`,
    content: `This is content for server component 13, item ${index + 1}`,
    timestamp: Date.now(),
  }));
}

async function ServerDataDisplay13() {
  const data = await fetchData13();
  const headersList = headers();
  const userAgent = headersList.get('user-agent') || 'Unknown';

  return (
    <div className="server-data-13">
      <h3>Server-fetched Data</h3>
      <p>User Agent: {userAgent.substring(0, 50)}...</p>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ServerComponent13() {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value || 'light';

  return (
    <div className="server-component-13" data-theme={theme}>
      <h2>Server Component Example 13</h2>
      <p>Current theme: {theme}</p>
      <p>Rendered on server at: {new Date().toISOString()}</p>
      
      <Suspense fallback={<div>Loading data...</div>}>
        <ServerDataDisplay13 />
      </Suspense>

      <div className="info">
        <h4>Server Component Features:</h4>
        <ul>
          <li>✓ Direct database/API access</li>
          <li>✓ Zero client JavaScript</li>
          <li>✓ Access to server-only resources</li>
          <li>✓ Automatic code splitting</li>
          <li>✓ Better SEO</li>
        </ul>
      </div>
    </div>
  );
}
