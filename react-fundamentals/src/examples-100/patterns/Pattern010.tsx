import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 10: Advanced React Design Pattern

interface Pattern10ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern10Context = createContext<Pattern10ContextValue | undefined>(undefined);

export function Pattern10Provider({ children }: { children: ReactNode }) {
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
    <Pattern10Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern10Context.Provider>
  );
}

export function usePattern10() {
  const context = useContext(Pattern10Context);
  if (!context) {
    throw new Error('usePattern10 must be used within Pattern10Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern10 = {
  Provider: Pattern10Provider,
  
  Display: function Display() {
    const { state } = usePattern10();
    return (
      <div className="pattern-10-display">
        <h4>Pattern 10 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern10();
    return (
      <div className="pattern-10-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern10Provider>
        <div className="pattern-10-container">
          {children}
        </div>
      </Pattern10Provider>
    );
  },
};

export default Pattern10;
