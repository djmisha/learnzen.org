import React from 'react';
import FinalRender from './poems.js'
import IconLogo from './images/icon-logo.js'
import './css/App.css';
import './css/skeleton.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="the-logo">
          <div className="logo"><IconLogo /></div>
       	  <div className="logo-tag">Tao Te Ching<span>by Lau Tzu</span></div>
        </div>
      </header>
      <main className="container">
        <FinalRender /> 
      </main>
    </div>
  );
}

export default App;
