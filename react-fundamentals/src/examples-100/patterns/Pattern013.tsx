import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 13: Advanced React Design Pattern

interface Pattern13ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern13Context = createContext<Pattern13ContextValue | undefined>(undefined);

export function Pattern13Provider({ children }: { children: ReactNode }) {
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
    <Pattern13Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern13Context.Provider>
  );
}

export function usePattern13() {
  const context = useContext(Pattern13Context);
  if (!context) {
    throw new Error('usePattern13 must be used within Pattern13Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern13 = {
  Provider: Pattern13Provider,
  
  Display: function Display() {
    const { state } = usePattern13();
    return (
      <div className="pattern-13-display">
        <h4>Pattern 13 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern13();
    return (
      <div className="pattern-13-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern13Provider>
        <div className="pattern-13-container">
          {children}
        </div>
      </Pattern13Provider>
    );
  },
};

export default Pattern13;
