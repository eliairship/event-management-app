import { useState } from 'react';

export default function UseStateExample() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        count is {count}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount((x) => x + 1)}>Decrement</button>
      </div>
    </>
  );
}
