import { cache } from 'react';
import { unstable_cache } from 'next/cache';

/**
 * Data Fetching Example 2
 * Various data fetching patterns in Next.js
 */

interface Item2 {
  id: number;
  name: string;
  value: number;
}

// React cache for request memoization
const getCachedData2 = cache(async (id: number) => {
  console.log(`Fetching data 2 for id: ${id}`);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    id,
    name: `Item ${id}`,
    value: Math.random() * 100,
    fetchedAt: new Date().toISOString(),
  };
});

// Next.js unstable_cache for data cache
const getStableData2 = unstable_cache(
  async (category: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      category,
      items: Array.from({ length: 5 }, (_, i) => ({
        id: i,
        name: `${category} Item 2`,
        value: Math.random() * 100,
      })),
    };
  },
  ['stable-data-2'],
  {
    revalidate: 3600,
    tags: ['data-2'],
  }
);

// Parallel data fetching
async function getParallelData2() {
  const [data1, data2, data3] = await Promise.all([
    fetch('https://api.example.com/endpoint1', { next: { revalidate: 60 } }),
    fetch('https://api.example.com/endpoint2', { next: { revalidate: 60 } }),
    fetch('https://api.example.com/endpoint3', { next: { revalidate: 60 } }),
  ]);

  return {
    data1: await data1.json().catch(() => ({})),
    data2: await data2.json().catch(() => ({})),
    data3: await data3.json().catch(() => ({})),
  };
}

// Sequential data fetching (when needed)
async function getSequentialData2(userId: number) {
  const user = await fetch(`https://api.example.com/users/${userId}`, {
    next: { revalidate: 300 },
  }).then(r => r.json()).catch(() => null);

  if (!user) return null;

  const posts = await fetch(`https://api.example.com/users/${userId}/posts`, {
    next: { revalidate: 60 },
  }).then(r => r.json()).catch(() => []);

  return { user, posts };
}

// Streaming with async component
async function StreamedData2() {
  const data = await getCachedData2(2);
  
  return (
    <div className="streamed-data">
      <h4>Streamed Data</h4>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default async function DataFetching2() {
  // Multiple data fetching patterns
  const cachedData = await getCachedData2(2);
  const stableData = await getStableData2('category-2');

  return (
    <div className="data-fetching-2">
      <h2>Data Fetching Example 2</h2>

      <section>
        <h3>Cached Data (React cache)</h3>
        <p>Memoized for the duration of the request</p>
        <pre>{JSON.stringify(cachedData, null, 2)}</pre>
      </section>

      <section>
        <h3>Stable Data (unstable_cache)</h3>
        <p>Cached across requests with revalidation</p>
        <pre>{JSON.stringify(stableData, null, 2)}</pre>
      </section>

      <section>
        <h3>Patterns Demonstrated:</h3>
        <ul>
          <li>✓ React cache for request deduplication</li>
          <li>✓ unstable_cache for persistent caching</li>
          <li>✓ Revalidation strategies</li>
          <li>✓ Tag-based cache invalidation</li>
          <li>✓ Parallel and sequential fetching</li>
        </ul>
      </section>
    </div>
  );
}
