import { Suspense } from 'react';

/**
 * Streaming Example 2
 * Progressive rendering with React Suspense
 */

async function SlowComponent2({ delay }: { delay: number }) {
  await new Promise(resolve => setTimeout(resolve, delay));
  return (
    <div className="slow-component">
      <h4>Slow Component 2</h4>
      <p>Loaded after {delay}ms</p>
      <p>Timestamp: {new Date().toISOString()}</p>
    </div>
  );
}

function LoadingFallback2({ name }: { name: string }) {
  return (
    <div className="loading-fallback">
      <span className="spinner"></span>
      Loading {name}...
    </div>
  );
}

export default function Streaming2() {
  return (
    <div className="streaming-2">
      <h2>Streaming Example 2</h2>
      <p>This content appears immediately</p>

      <div className="streaming-sections">
        <Suspense fallback={<LoadingFallback2 name="Section 1" />}>
          <SlowComponent2 delay={1000} />
        </Suspense>

        <Suspense fallback={<LoadingFallback2 name="Section 2" />}>
          <SlowComponent2 delay={2000} />
        </Suspense>

        <Suspense fallback={<LoadingFallback2 name="Section 3" />}>
          <SlowComponent2 delay={3000} />
        </Suspense>
      </div>

      <div className="info">
        <h3>Streaming Benefits:</h3>
        <ul>
          <li>✓ Faster Time to First Byte (TTFB)</li>
          <li>✓ Progressive rendering</li>
          <li>✓ Better perceived performance</li>
          <li>✓ Selective hydration</li>
        </ul>
      </div>
    </div>
  );
}
