/**
 * Loading UI Example 3
 * Automatic loading state while content streams
 */

export default function Loading3() {
  return (
    <div className="loading-3">
      <div className="spinner"></div>
      <p>Loading Example 3...</p>
      <div className="skeleton">
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
      </div>
    </div>
  );
}
