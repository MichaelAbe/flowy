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

    const handlePlay = (e) => {
      if(playing === true) {
        clearInterval()
        setPlaying(false)
      } else {
        setInterval(playClickBase, 60 / parseInt(bpm) * 1000) 
        setPlaying(true)
      }
    }

    const handleBpmPlus = () => {
      setBpm(parseInt(bpm) + 1)
    }
    const handleBpmMinus = () => setBpm(parseInt(bpm) - 1)

    const playClickBase = () => {
      clickBase.play()
    }
    
    // setInterval(playClickBase, 60 / parseInt(bpm) * 1000)

    return (
        <div className='metronome'>
        <div className='bpm-slider'>
        <span className='big-bpm'>{bpm} </span>
        <span className='bpm-small'>BPM </span>
        <div> 

        <span><button className='plusminus' onClick={handleBpmMinus}>-</button></span>
        <span>
          <input
            className='slider'
            type='range'
            min='60'
            max='180'
            value={bpm} 
            onChange={handleBpmChange}
            />
        </span>
        <span><button className='plusminus' onClick={handleBpmPlus}>+</button></span>
        </div>
        </div>
        <button className='startstop' onClick={handlePlay}>
          {playing ? 'Play' : 'Stop'}
        </button>
      </div>
    )
}



