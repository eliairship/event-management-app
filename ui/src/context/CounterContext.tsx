import { ReactNode, createContext, useReducer } from 'react';

const initialState = {
  count: 0,
  decrementCount: () => {},
  incrementCount: () => {},
};

interface State {
  count: number;
  decrementCount: () => void;
  incrementCount: () => void;
}

const counterReducer = (
  state: State,
  action: { type: unknown; payload: number }
) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      throw new Error('Invalid Action');
  }
};

export const CounterContext = createContext<State>(initialState);

interface ContextType {
  children: ReactNode;
}
export function CounterContextProvider({ children }: ContextType) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  function incrementCount() {
    dispatch({ type: 'increment', payload: 1 });
  }

  function decrementCount() {
    dispatch({ type: 'decrement', payload: 1 });
  }

  return (
    <CounterContext.Provider
      value={{ count: state.count, incrementCount, decrementCount }}
    >
      {children}
    </CounterContext.Provider>
  );
}
