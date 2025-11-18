import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 3: Advanced React Design Pattern

interface Pattern3ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern3Context = createContext<Pattern3ContextValue | undefined>(undefined);

export function Pattern3Provider({ children }: { children: ReactNode }) {
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
    <Pattern3Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern3Context.Provider>
  );
}

export function usePattern3() {
  const context = useContext(Pattern3Context);
  if (!context) {
    throw new Error('usePattern3 must be used within Pattern3Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern3 = {
  Provider: Pattern3Provider,
  
  Display: function Display() {
    const { state } = usePattern3();
    return (
      <div className="pattern-3-display">
        <h4>Pattern 3 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern3();
    return (
      <div className="pattern-3-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern3Provider>
        <div className="pattern-3-container">
          {children}
        </div>
      </Pattern3Provider>
    );
  },
};

export default Pattern3;
