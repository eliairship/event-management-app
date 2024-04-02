import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ReducerExample from './components/ReducerExample';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <button onClick={() => navigate('/nested')}>nested</button>
      <button onClick={() => navigate('/test')}>Test</button>
      <Routes>
        <Route path="/nested">
          <Route index element={<>Nested</>} />
          <Route path={':testId'} element={<>Nested Detail</>} />
        </Route>
        <Route path="/nottest" element={<>Not Test Route</>} />
        <Route path="/test" element={<>Test Route</>} />
        <Route path="*" element={<Navigate to="/test" />} />
      </Routes>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <ReducerExample />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
