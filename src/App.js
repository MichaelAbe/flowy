import React from 'react'
import './App.css';
import Metronome from './Components/Metronome';
import KeySig from './Components/KeySig';
import './index.css'
import Time from './Components/Time';

function App() {
  return (
    <div className="App">
      <Metronome/>
      <Time/>
      <KeySig/>
    </div>
  );
}

export default App;
