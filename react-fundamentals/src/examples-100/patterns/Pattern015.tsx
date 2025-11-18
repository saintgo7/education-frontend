import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 15: Advanced React Design Pattern

interface Pattern15ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern15Context = createContext<Pattern15ContextValue | undefined>(undefined);

export function Pattern15Provider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({
    count: 0,
    data: [],
    isActive: false,
  });

  const actions = {
    increment: () => setState(prev => ({ ...prev, count: prev.count + 1 })),
    decrement: () => setState(prev => ({ ...prev, count: prev.count - 1 })),
    reset: () => setState({ count: 0, data: [], isActive: false }),
  };

  return (
    <Pattern15Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern15Context.Provider>
  );
}

export function usePattern15() {
  const context = useContext(Pattern15Context);
  if (!context) {
    throw new Error('usePattern15 must be used within Pattern15Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern15 = {
  Provider: Pattern15Provider,
  
  Display: function Display() {
    const { state } = usePattern15();
    return (
      <div className="pattern-15-display">
        <h4>Pattern 15 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern15();
    return (
      <div className="pattern-15-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern15Provider>
        <div className="pattern-15-container">
          {children}
        </div>
      </Pattern15Provider>
    );
  },
};

export default Pattern15;
