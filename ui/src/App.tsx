import './App.css';
import { useNavigate } from 'react-router-dom';
import { Routes } from './containers/Routes';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/nested')}>nested</button>
      <button onClick={() => navigate('/test')}>Test</button>
      <Routes />
    </>
  );
}

export default App;
