import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 14: Advanced React Design Pattern

interface Pattern14ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern14Context = createContext<Pattern14ContextValue | undefined>(undefined);

export function Pattern14Provider({ children }: { children: ReactNode }) {
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
    <Pattern14Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern14Context.Provider>
  );
}

export function usePattern14() {
  const context = useContext(Pattern14Context);
  if (!context) {
    throw new Error('usePattern14 must be used within Pattern14Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern14 = {
  Provider: Pattern14Provider,
  
  Display: function Display() {
    const { state } = usePattern14();
    return (
      <div className="pattern-14-display">
        <h4>Pattern 14 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern14();
    return (
      <div className="pattern-14-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern14Provider>
        <div className="pattern-14-container">
          {children}
        </div>
      </Pattern14Provider>
    );
  },
};

export default Pattern14;
