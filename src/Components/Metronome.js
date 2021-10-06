import React from 'react'
import {useState, useEffect} from 'react'

export default function Metronome() {
 

    const [bpm, setBpm] = useState([120])
    const [playing, setPlaying] = useState([false])

    const handleBpmChange = (e) => {
        let bpm = e.target.value
        // bpm.setBpm({bpm})
    }

    const handleStart = (e) => {
        alert('This is the start button')
    }

    const handleBpmPlus = () => setBpm(bpm + 1)
    const handleBpmMinus = () => setBpm(bpm + 1)

    return (
        <div className='metronome'>
        <div className='bpm-slider'>
        <div>{bpm} BPM</div>
        <button className='plusminus' onClick={handleBpmMinus}>-</button>
        <button className='plusminus' onClick={handleBpmPlus}>+</button>
          <input
            type='range'
            min='60'
            max='240'
            value={bpm} 
            onChange={handleBpmChange}/>
        </div>
        <button className='startstop' onClick={handleStart}>
          {playing ? 'Play' : 'Stop'}
        </button>
      </div>
    )
}
