import React from 'react';
import './App.css';

import Greet from './components/Greet'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greet whom="Lauren"/>
      <Greet />
      <Greet whom="Gimli"/>
      <Greet whom="Aragorn"/>
      <Counter/>
    </div>
  );
}

export default App;
