import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='App-Title-Container'>
          <div className='App-Title-Body'>
            <p className='App-Title'>
              海のような波。
            </p>
          </div>
        </div>
        <div className='App-link-container'>
          <a
            className="App-link"
            href="https://blog.rekidunois.cc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <a
            className='App-link'
            href='https://github.com/RekiDunois'
            target='_blank'
            rel='noopener noreferrer'>
            GitHub
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
