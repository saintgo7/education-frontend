import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 11: Advanced React Design Pattern

interface Pattern11ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern11Context = createContext<Pattern11ContextValue | undefined>(undefined);

export function Pattern11Provider({ children }: { children: ReactNode }) {
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
    <Pattern11Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern11Context.Provider>
  );
}

export function usePattern11() {
  const context = useContext(Pattern11Context);
  if (!context) {
    throw new Error('usePattern11 must be used within Pattern11Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern11 = {
  Provider: Pattern11Provider,
  
  Display: function Display() {
    const { state } = usePattern11();
    return (
      <div className="pattern-11-display">
        <h4>Pattern 11 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern11();
    return (
      <div className="pattern-11-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern11Provider>
        <div className="pattern-11-container">
          {children}
        </div>
      </Pattern11Provider>
    );
  },
};

export default Pattern11;
