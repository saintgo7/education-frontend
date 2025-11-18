import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 9: Advanced React Design Pattern

interface Pattern9ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern9Context = createContext<Pattern9ContextValue | undefined>(undefined);

export function Pattern9Provider({ children }: { children: ReactNode }) {
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
    <Pattern9Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern9Context.Provider>
  );
}

export function usePattern9() {
  const context = useContext(Pattern9Context);
  if (!context) {
    throw new Error('usePattern9 must be used within Pattern9Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern9 = {
  Provider: Pattern9Provider,
  
  Display: function Display() {
    const { state } = usePattern9();
    return (
      <div className="pattern-9-display">
        <h4>Pattern 9 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern9();
    return (
      <div className="pattern-9-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern9Provider>
        <div className="pattern-9-container">
          {children}
        </div>
      </Pattern9Provider>
    );
  },
};

export default Pattern9;
