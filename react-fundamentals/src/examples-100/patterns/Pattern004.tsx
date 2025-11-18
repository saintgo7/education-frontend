import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 4: Advanced React Design Pattern

interface Pattern4ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern4Context = createContext<Pattern4ContextValue | undefined>(undefined);

export function Pattern4Provider({ children }: { children: ReactNode }) {
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
    <Pattern4Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern4Context.Provider>
  );
}

export function usePattern4() {
  const context = useContext(Pattern4Context);
  if (!context) {
    throw new Error('usePattern4 must be used within Pattern4Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern4 = {
  Provider: Pattern4Provider,
  
  Display: function Display() {
    const { state } = usePattern4();
    return (
      <div className="pattern-4-display">
        <h4>Pattern 4 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern4();
    return (
      <div className="pattern-4-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern4Provider>
        <div className="pattern-4-container">
          {children}
        </div>
      </Pattern4Provider>
    );
  },
};

export default Pattern4;
