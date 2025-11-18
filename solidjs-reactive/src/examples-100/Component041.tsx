import { createSignal } from 'solid-js';

export default function SolidComponent41() {
  const [count, setCount] = createSignal(0);
  
  return (
    <div>
      <h2>Solid.js Example 41</h2>
      <p>Count: {count()}</p>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
    </div>
  );
}
