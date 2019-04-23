import React from 'react';
import './App.css';


import Bounce from './components/Bounce';
import CountBy from './components/CountBy';
import Limit from './components/Limit';
import AddCounter from './components/AddCounter'

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
    </div>
  );
}

export default App;
