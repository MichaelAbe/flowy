import React from 'react'
import {useState, useEffect} from 'react'




export default function Metronome() {
 
  const [bpm, setBpm] = useState([120])
  // const [tempo, setTempo] = useState([bpm])
  const [playing, setPlaying] = useState([false])
  const clickBase = new Audio('http://www.denhaku.com/r_box/sr16/sr16perc/hi%20block.wav')
  const clickAccent = new Audio('http://drbraukmann.com/DESN275/soundLibrary/toolsBangs/tapOnWood.WAV')

    const handleBpmChange = (e) => {
      e.preventDefault()
        let bpm = e.target.value
        setBpm(parseInt(bpm))
    }

    const handlePlay = (e) => {
      setInterval(playClickBase, 60 / parseInt(bpm) * 1000) 

      // if(playing) {
      //   clearInterval(tempo)
      //   setPlaying(false)
      // } else {
      //   tempo = setInterval(playClickBase, (60 / bpm) * 1000)
      //   setPlaying(true)
      // } playClickBase

      // useEffect(() => {
      //   const tempo = setInterval(() => {
      //     setTempo(tempo => tempo + 1);
      //   }, 1000);
      //   return () => clearInterval(tempo);
      // }, []);

      // if(!tempo) {
      // console.log(tempo)
      // tempo = tempo + 1
      // console.log(tempo)
      // setBpm(parseInt(tempo))
      // console.log(tempo)
        // tempo = setInterval(playClickBase, 60 / parseInt(bpm) * 1000) 
      //   setPlaying(true)
      // } else {
        // clearInterval(tempo)
      // }
    }

    // const stopInterval = () => {
    //   clearInterval(tempo)
    //   tempo = null
    // }

    const handleBpmPlus = () => {
      setBpm(parseInt(bpm) + 1)
    }
    const handleBpmMinus = () => setBpm(parseInt(bpm) - 1)

    const playClickBase = () => {
      clickBase.play()
    }
    
    // setInterval(playClickBase, 60 / parseInt(bpm) * 1000)

    return (
        <div id='metronome' className='metronome'>
        <div id='bpm-slider' className='bpm-slider'>
        <span id='big-bpm' className='big-bpm'>{bpm} </span>
        <span id='bpm-small' className='bpm-small'>BPM </span>
        <div> 

        <span><button id='minus' className='plusminus' onClick={handleBpmMinus}>-</button></span>
        <span>
          <input
            id='slider'
            className='slider'
            type='range'
            min='60'
            max='180'
            value={bpm} 
            onChange={handleBpmChange}
            />
        </span>
        <span><button id='plus' className='plusminus' onClick={handleBpmPlus}>+</button></span>
        {/* <button onClick={stopInterval}>stop</button> */}
        </div>
        </div>
        <button id='startstop' className='startstop' onClick={handlePlay}>
          {playing ? 'PLAY' : 'STOP'}
        </button>
      </div>
    )
}



