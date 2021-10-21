import React from 'react'
import './App.css';
import Metronome from './Components/Metronome';
import Key from './Components/Key';
import './index.css'
import Time from './Components/Time';

function App() {
  return (
    <div className="App">
      <Metronome/>
      <Time/>
      <Key/>
    </div>
  );
}

export default App;
