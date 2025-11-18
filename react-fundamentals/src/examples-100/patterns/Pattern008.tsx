import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 8: Advanced React Design Pattern

interface Pattern8ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern8Context = createContext<Pattern8ContextValue | undefined>(undefined);

export function Pattern8Provider({ children }: { children: ReactNode }) {
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
    <Pattern8Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern8Context.Provider>
  );
}

export function usePattern8() {
  const context = useContext(Pattern8Context);
  if (!context) {
    throw new Error('usePattern8 must be used within Pattern8Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern8 = {
  Provider: Pattern8Provider,
  
  Display: function Display() {
    const { state } = usePattern8();
    return (
      <div className="pattern-8-display">
        <h4>Pattern 8 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern8();
    return (
      <div className="pattern-8-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern8Provider>
        <div className="pattern-8-container">
          {children}
        </div>
      </Pattern8Provider>
    );
  },
};

export default Pattern8;
