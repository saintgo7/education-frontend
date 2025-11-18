/**
 * Loading UI Example 2
 * Automatic loading state while content streams
 */

export default function Loading2() {
  return (
    <div className="loading-2">
      <div className="spinner"></div>
      <p>Loading Example 2...</p>
      <div className="skeleton">
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
      </div>
    </div>
  );
}
