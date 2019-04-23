import React from 'react';
import './App.css';

import Greet from './components/Greet'
import Counter from './components/Counter';
import Clicker from './components/Clicker';

function App() {
  return (
    <div className="App">
      <Greet whom="Aragorn"/>
      <Counter number="8"/>
      <Clicker />
      <Clicker />
      <Clicker />
    </div>
  );
}

export default App;
