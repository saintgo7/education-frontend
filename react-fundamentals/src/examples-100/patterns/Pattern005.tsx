import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 5: Advanced React Design Pattern

interface Pattern5ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern5Context = createContext<Pattern5ContextValue | undefined>(undefined);

export function Pattern5Provider({ children }: { children: ReactNode }) {
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
    <Pattern5Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern5Context.Provider>
  );
}

export function usePattern5() {
  const context = useContext(Pattern5Context);
  if (!context) {
    throw new Error('usePattern5 must be used within Pattern5Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern5 = {
  Provider: Pattern5Provider,
  
  Display: function Display() {
    const { state } = usePattern5();
    return (
      <div className="pattern-5-display">
        <h4>Pattern 5 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern5();
    return (
      <div className="pattern-5-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern5Provider>
        <div className="pattern-5-container">
          {children}
        </div>
      </Pattern5Provider>
    );
  },
};

export default Pattern5;
