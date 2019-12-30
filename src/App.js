import React from 'react';
import Logo from './logo.js'
import FinalRender from './poems.js'
import './css/App.css';
import './css/skeleton.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <Logo />
      </header>
      <main className="container">
        <FinalRender /> 
      </main>
    </div>
  );
}

export default App;
