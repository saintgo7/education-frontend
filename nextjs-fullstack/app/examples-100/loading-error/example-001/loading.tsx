/**
 * Loading UI Example 1
 * Automatic loading state while content streams
 */

export default function Loading1() {
  return (
    <div className="loading-1">
      <div className="spinner"></div>
      <p>Loading Example 1...</p>
      <div className="skeleton">
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
      </div>
    </div>
  );
}
