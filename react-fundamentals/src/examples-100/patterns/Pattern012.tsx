import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 12: Advanced React Design Pattern

interface Pattern12ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern12Context = createContext<Pattern12ContextValue | undefined>(undefined);

export function Pattern12Provider({ children }: { children: ReactNode }) {
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
    <Pattern12Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern12Context.Provider>
  );
}

export function usePattern12() {
  const context = useContext(Pattern12Context);
  if (!context) {
    throw new Error('usePattern12 must be used within Pattern12Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern12 = {
  Provider: Pattern12Provider,
  
  Display: function Display() {
    const { state } = usePattern12();
    return (
      <div className="pattern-12-display">
        <h4>Pattern 12 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern12();
    return (
      <div className="pattern-12-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern12Provider>
        <div className="pattern-12-container">
          {children}
        </div>
      </Pattern12Provider>
    );
  },
};

export default Pattern12;
