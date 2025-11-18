import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 6: Advanced React Design Pattern

interface Pattern6ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern6Context = createContext<Pattern6ContextValue | undefined>(undefined);

export function Pattern6Provider({ children }: { children: ReactNode }) {
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
    <Pattern6Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern6Context.Provider>
  );
}

export function usePattern6() {
  const context = useContext(Pattern6Context);
  if (!context) {
    throw new Error('usePattern6 must be used within Pattern6Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern6 = {
  Provider: Pattern6Provider,
  
  Display: function Display() {
    const { state } = usePattern6();
    return (
      <div className="pattern-6-display">
        <h4>Pattern 6 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern6();
    return (
      <div className="pattern-6-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern6Provider>
        <div className="pattern-6-container">
          {children}
        </div>
      </Pattern6Provider>
    );
  },
};

export default Pattern6;
