import { useReducer } from 'react';

interface State {
  count: number;
}

const exampleReducer = (
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

export default function ReducerExample() {
  const [state, dispatch] = useReducer(exampleReducer, { count: 0 });

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        count is {state.count}
        <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
          Decrement
        </button>
      </div>
    </>
  );
}
