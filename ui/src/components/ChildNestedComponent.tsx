import { useContext } from 'react';

import { CounterContext } from '../context/CounterContext';

const ChildNestedComponent = () => {
  const context = useContext(CounterContext);

  return (
    <div>
      <h1>Child Nested </h1>
      <button onClick={context.incrementCount}>Increment</button>
      <button onClick={context.decrementCount}>Decrement</button>
    </div>
  );
};

export default ChildNestedComponent;
