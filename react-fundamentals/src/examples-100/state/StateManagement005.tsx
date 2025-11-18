import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// State Management Example 5

interface State5 {
  items: any[];
  selectedId: string | null;
  filter: string;
  sortOrder: 'asc' | 'desc';
  loading: boolean;
  error: string | null;
}

type Action5 =
  | { type: 'ADD_ITEM'; payload: any }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_ITEM'; payload: { id: string; data: any } }
  | { type: 'SELECT_ITEM'; payload: string | null }
  | { type: 'SET_FILTER'; payload: string }
  | { type: 'TOGGLE_SORT' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET' };

const initialState: State5 = {
  items: [],
  selectedId: null,
  filter: '',
  sortOrder: 'asc',
  loading: false,
  error: null,
};

function reducer5(state: State5, action: Action5): State5 {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        selectedId: state.selectedId === action.payload ? null : state.selectedId,
      };

    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, ...action.payload.data }
            : item
        ),
      };

    case 'SELECT_ITEM':
      return {
        ...state,
        selectedId: action.payload,
      };

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };

    case 'TOGGLE_SORT':
      return {
        ...state,
        sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc',
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

interface StateContext5 {
  state: State5;
  dispatch: React.Dispatch<Action5>;
  actions: {
    addItem: (item: any) => void;
    removeItem: (id: string) => void;
    updateItem: (id: string, data: any) => void;
    selectItem: (id: string | null) => void;
    setFilter: (filter: string) => void;
    toggleSort: () => void;
    reset: () => void;
  };
}

const StateContext5 = createContext<StateContext5 | undefined>(undefined);

export function StateProvider5({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer5, initialState);

  const actions = {
    addItem: (item: any) => dispatch({ type: 'ADD_ITEM', payload: item }),
    removeItem: (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
    updateItem: (id: string, data: any) => 
      dispatch({ type: 'UPDATE_ITEM', payload: { id, data } }),
    selectItem: (id: string | null) => 
      dispatch({ type: 'SELECT_ITEM', payload: id }),
    setFilter: (filter: string) => 
      dispatch({ type: 'SET_FILTER', payload: filter }),
    toggleSort: () => dispatch({ type: 'TOGGLE_SORT' }),
    reset: () => dispatch({ type: 'RESET' }),
  };

  return (
    <StateContext5.Provider value={{ state, dispatch, actions }}>
      {children}
    </StateContext5.Provider>
  );
}

export function useStateManagement5() {
  const context = useContext(StateContext5);
  if (!context) {
    throw new Error('useStateManagement5 must be used within StateProvider5');
  }
  return context;
}

export function StateManagementDemo5() {
  const { state, actions } = useStateManagement5();

  const filteredItems = state.items
    .filter(item => 
      item.name?.toLowerCase().includes(state.filter.toLowerCase())
    )
    .sort((a, b) => {
      const order = state.sortOrder === 'asc' ? 1 : -1;
      return a.name > b.name ? order : -order;
    });

  return (
    <div className="state-demo-5">
      <h3>State Management Example 5</h3>
      
      <div className="controls">
        <input
          type="text"
          placeholder="Filter..."
          value={state.filter}
          onChange={(e) => actions.setFilter(e.target.value)}
        />
        <button onClick={actions.toggleSort}>
          Sort: {state.sortOrder}
        </button>
        <button onClick={() => actions.addItem({
          id: Date.now().toString(),
          name: `Item ${state.items.length + 1}`,
        })}>
          Add Item
        </button>
        <button onClick={actions.reset}>Reset</button>
      </div>

      <div className="items">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className={state.selectedId === item.id ? 'selected' : ''}
            onClick={() => actions.selectItem(item.id)}
          >
            {item.name}
            <button onClick={(e) => {
              e.stopPropagation();
              actions.removeItem(item.id);
            }}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StateManagementDemo5;
