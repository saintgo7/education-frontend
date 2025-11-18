import React, { createContext, useContext, useState, ReactNode } from 'react';

// Pattern 7: Advanced React Design Pattern

interface Pattern7ContextValue {
  state: any;
  setState: (value: any) => void;
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
}

const Pattern7Context = createContext<Pattern7ContextValue | undefined>(undefined);

export function Pattern7Provider({ children }: { children: ReactNode }) {
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
    <Pattern7Context.Provider value={{ state, setState, actions }}>
      {children}
    </Pattern7Context.Provider>
  );
}

export function usePattern7() {
  const context = useContext(Pattern7Context);
  if (!context) {
    throw new Error('usePattern7 must be used within Pattern7Provider');
  }
  return context;
}

// Compound Components Pattern
export const Pattern7 = {
  Provider: Pattern7Provider,
  
  Display: function Display() {
    const { state } = usePattern7();
    return (
      <div className="pattern-7-display">
        <h4>Pattern 7 Display</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  },

  Controls: function Controls() {
    const { actions } = usePattern7();
    return (
      <div className="pattern-7-controls">
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.reset}>Reset</button>
      </div>
    );
  },

  Container: function Container({ children }: { children: ReactNode }) {
    return (
      <Pattern7Provider>
        <div className="pattern-7-container">
          {children}
        </div>
      </Pattern7Provider>
    );
  },
};

export default Pattern7;
