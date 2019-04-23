import React from 'react';
import './App.css';

import Greet from './components/Greet'
// import Counter from './components/Counter';
import Clicker from './components/Clicker';
import Bounce from './components/Bounce'

function App() {
  return (
    <div className="App">
      <Bounce/>
      <Greet whom="Aragorn"/>
      <Clicker />
      <Clicker />
      <Clicker />
    </div>
  );
}

export default App;
