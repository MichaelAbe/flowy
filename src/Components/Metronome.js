import React from 'react'
import {useState, useEffect} from 'react'

export default function Metronome() {
 

    const [bpm, setBpm] = useState([120])
    const [playing, setPlaying] = useState([false])
    const clickBase = new Audio('http://www.denhaku.com/r_box/sr16/sr16perc/hi%20block.wav')
    const clickAccent = new Audio('http://drbraukmann.com/DESN275/soundLibrary/toolsBangs/tapOnWood.WAV')

    const handleBpmChange = (e) => {
      e.preventDefault()
        let bpm = e.target.value
        setBpm(parseInt(bpm))
    }

    const handleStart = (e) => {
        alert('This is the start button')
    }

    const handleBpmPlus = () => {
      setBpm(parseInt(bpm) + 1)
      clickBase.play()
    }
    const handleBpmMinus = () => setBpm(parseInt(bpm) - 1)

    return (
        <div className='metronome'>
        <div className='bpm-slider'>
        <div>{bpm} BPM</div>
        <button className='plusminus' onClick={handleBpmMinus}>-</button>
        <button className='plusminus' onClick={handleBpmPlus}>+</button>
          <input
            type='range'
            min='60'
            max='180'
            value={bpm} 
            onChange={handleBpmChange}
            />
        </div>
        <button className='startstop' onClick={handleStart}>
          {playing ? 'Play' : 'Stop'}
        </button>
      </div>
    )
}
