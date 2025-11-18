import { createSignal } from 'solid-js';

export default function SolidComponent64() {
  const [count, setCount] = createSignal(0);
  
  return (
    <div>
      <h2>Solid.js Example 64</h2>
      <p>Count: {count()}</p>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
    </div>
  );
}
