import React, { memo, useMemo, useCallback, useState, useTransition } from 'react';

/**
 * Performance Example 7
 * React 성능 최적화 기법을 보여주는 예제
 */

interface Item7 {
  id: number;
  name: string;
  value: number;
}

// Memoized component to prevent unnecessary re-renders
const ExpensiveComponent7 = memo(({ items }: { items: Item7[] }) => {
  console.log('ExpensiveComponent7 rendered');
  
  // Expensive calculation
  const total = useMemo(() => {
    console.log('Calculating total...');
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  return (
    <div className="expensive-component-7">
      <h4>Total: {total}</h4>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
});

ExpensiveComponent7.displayName = 'ExpensiveComponent7';

export function Performance7() {
  const [items, setItems] = useState<Item7[]>([
    { id: 1, name: 'Item 1', value: 10 },
    { id: 2, name: 'Item 2', value: 20 },
    { id: 3, name: 'Item 3', value: 30 },
  ]);
  
  const [filter, setFilter] = useState('');
  const [isPending, startTransition] = useTransition();

  // Memoize filtered items
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // Memoize callback functions
  const handleAddItem = useCallback(() => {
    const newItem: Item7 = {
      id: Date.now(),
      name: `Item ${items.length + 1}`,
      value: Math.floor(Math.random() * 100),
    };
    setItems(prev => [...prev, newItem]);
  }, [items.length]);

  const handleRemoveItem = useCallback((id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const handleFilterChange = (value: string) => {
    // Use transition for non-urgent updates
    startTransition(() => {
      setFilter(value);
    });
  };

  // Virtual scrolling helper
  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, 50); // Only render first 50 items
  }, [filteredItems]);

  return (
    <div className="performance-demo-7">
      <h3>Performance Example 7</h3>
      
      <div className="controls">
        <input
          type="text"
          placeholder="Filter items..."
          onChange={(e) => handleFilterChange(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
        {isPending && <span>Updating...</span>}
      </div>

      <div className="stats">
        <p>Total items: {items.length}</p>
        <p>Filtered items: {filteredItems.length}</p>
        <p>Visible items: {visibleItems.length}</p>
      </div>

      <ExpensiveComponent7 items={visibleItems} />

      <div className="item-list">
        {visibleItems.map(item => (
          <div key={item.id} className="item">
            <span>{item.name}</span>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Performance7;
