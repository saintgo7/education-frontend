import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

/**
 * Testing Example 5
 * React Testing Library를 사용한 컴포넌트 테스트
 */

interface Counter5Props {
  initialCount?: number;
  step?: number;
}

function Counter5({ initialCount = 0, step = 1 }: Counter5Props) {
  const [count, setCount] = React.useState(initialCount);
  const [history, setHistory] = React.useState<number[]>([initialCount]);

  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const decrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const reset = () => {
    setCount(initialCount);
    setHistory([initialCount]);
  };

  return (
    <div data-testid="counter-5">
      <h3>Counter 5</h3>
      <p data-testid="count">Count: {count}</p>
      <p data-testid="history">History: {history.join(', ')}</p>
      <button onClick={increment} data-testid="increment">
        Increment
      </button>
      <button onClick={decrement} data-testid="decrement">
        Decrement
      </button>
      <button onClick={reset} data-testid="reset">
        Reset
      </button>
    </div>
  );
}

describe('Counter5', () => {
  it('should render with initial count', () => {
    render(<Counter5 initialCount={5} />);
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 5');
  });

  it('should increment count when increment button is clicked', () => {
    render(<Counter5 initialCount={0} step={2} />);
    
    const incrementButton = screen.getByTestId('increment');
    fireEvent.click(incrementButton);
    
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 2');
  });

  it('should decrement count when decrement button is clicked', () => {
    render(<Counter5 initialCount={10} step={3} />);
    
    const decrementButton = screen.getByTestId('decrement');
    fireEvent.click(decrementButton);
    
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 7');
  });

  it('should reset count when reset button is clicked', () => {
    render(<Counter5 initialCount={5} />);
    
    const incrementButton = screen.getByTestId('increment');
    const resetButton = screen.getByTestId('reset');
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 7');
    
    fireEvent.click(resetButton);
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 5');
  });

  it('should maintain history of counts', () => {
    render(<Counter5 initialCount={0} step={1} />);
    
    const incrementButton = screen.getByTestId('increment');
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    
    expect(screen.getByTestId('history')).toHaveTextContent('History: 0, 1, 2');
  });

  it('should handle multiple operations', async () => {
    render(<Counter5 initialCount={0} step={1} />);
    
    const incrementButton = screen.getByTestId('increment');
    const decrementButton = screen.getByTestId('decrement');
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    
    await waitFor(() => {
      expect(screen.getByTestId('count')).toHaveTextContent('Count: 1');
    });
  });
});

export { Counter5 };
