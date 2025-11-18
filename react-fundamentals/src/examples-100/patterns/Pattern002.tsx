import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 2: Advanced React Design Pattern

interface Pattern2ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern2Context = createContext<Pattern2ContextValue | undefined>(undefined);

export function Pattern2Provider({ children }: { children: ReactNode }) {
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
    <Pattern2Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern2Context.Provider>
  );
}

export function usePattern2() {
  const context = useContext(Pattern2Context);
  if (!context) {
    throw new Error('usePattern2 must be used within Pattern2Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern2 = {
  Provider: Pattern2Provider,
  
  Display: function Display() {
    const { state } = usePattern2();
    return (
      <div className="pattern-2-display">
        <h4>Pattern 2 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern2();
    return (
      <div className="pattern-2-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern2Provider>
        <div className="pattern-2-container">
          {children}
        </div>
      </Pattern2Provider>
    );
  },
};

export default Pattern2;
