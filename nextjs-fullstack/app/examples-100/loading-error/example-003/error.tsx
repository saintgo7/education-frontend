'use client';

import { useEffect } from 'react';

/**
 * Error UI Example 3
 * Error boundary for handling errors
 */

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error3({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Error 3:', error);
  }, [error]);

  return (
    <div className="error-3">
      <h2>Something went wrong in Example 3!</h2>
      <p className="error-message">{error.message}</p>
      {error.digest && (
        <p className="error-digest">Error ID: {error.digest}</p>
      )}
      <button onClick={reset}>Try again</button>
      <details>
        <summary>Error details</summary>
        <pre>{error.stack}</pre>
      </details>
    </div>
  );
}
