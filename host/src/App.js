import React from 'react';
import logo from './logo.svg';
import './App.css';

// Динамічний імпорт remote модуля
const RemoteButton = React.lazy(() => import('remote/Button'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <React.Suspense fallback={<div>Loading...</div>}>
          <RemoteButton />
        </React.Suspense>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
