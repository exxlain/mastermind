import React from 'react';
import logo from './logo.svg';
import { StartPage } from './features/StartPage/StartPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StartPage />
      </header>
    </div>
  );
}

export default App;
