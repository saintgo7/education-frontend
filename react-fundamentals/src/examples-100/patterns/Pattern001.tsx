import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 1: Advanced React Design Pattern

interface Pattern1ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern1Context = createContext<Pattern1ContextValue | undefined>(undefined);

export function Pattern1Provider({ children }: { children: ReactNode }) {
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
    <Pattern1Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern1Context.Provider>
  );
}

export function usePattern1() {
  const context = useContext(Pattern1Context);
  if (!context) {
    throw new Error('usePattern1 must be used within Pattern1Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern1 = {
  Provider: Pattern1Provider,
  
  Display: function Display() {
    const { state } = usePattern1();
    return (
      <div className="pattern-1-display">
        <h4>Pattern 1 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern1();
    return (
      <div className="pattern-1-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern1Provider>
        <div className="pattern-1-container">
          {children}
        </div>
      </Pattern1Provider>
    );
  },
};

export default Pattern1;
