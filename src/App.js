import React from 'react';
import FinalRender from './poems.js'

import './App.css';
import './skeleton.css';

import yinyang from './images/yin-and-yang.svg';

function App() {
  return (
    <div className="App">
      <header className="container">
      	<img src={yinyang} className="logo" alt="Prev" />
     	 <div>Tao Te Ching</div>
     	 <div>by Lau Tzu</div>
      </header>
      <main className="container">
        <FinalRender /> 
      </main>
    </div>
  );
}

export default App;
