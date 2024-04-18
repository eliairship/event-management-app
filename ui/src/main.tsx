import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ExampleContextProvider } from './context/ExampleContext.tsx';
import { CounterContextProvider } from './context/CounterContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ExampleContextProvider>
        <CounterContextProvider>
          <App />
        </CounterContextProvider>
      </ExampleContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
