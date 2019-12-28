import React from 'react';
import FileteredPoemsTable from './poems.js'
// import RandomButton from './buttons.js'
import './App.css';
import './skeleton.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <FileteredPoemsTable /> 
      </header>
    </div>
  );
}

export default App;
