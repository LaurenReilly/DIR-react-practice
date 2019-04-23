import React from 'react';
import './App.css';


import Bounce from './components/Bounce';
import CountBy from './components/CountBy';
import Limit from './components/Limit';
import AddCounter from './components/AddCounter'
import LowerCase from './components/LowerCase';
import Leet from './components/Leet';
import Caesar from './components/Caesar';

function App() {
  return (
    <div className="App">
      <h1>Bouncing Counter</h1>
      <Bounce/>
      <h1>Count By Props</h1>
      <CountBy by={2} />
      <h1>Set Limits By Props</h1>
      <Limit upperLimit={20} lowerLimit={5}/>
      <h1>Add Counter</h1>
      <AddCounter/>
      <h1>LowerCase</h1>
      <LowerCase name="LAUREN"/>
      <h1>Leet</h1>
      <Leet name="loorena"/>
      <h1>Caesar</h1>
      <Caesar name="Lauren"/>
    </div>
  );
}

export default App;
