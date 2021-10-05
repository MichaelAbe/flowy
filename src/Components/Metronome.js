import React from 'react'
import {useState, useEffect} from 'react'

export default function Metronome() {
 

    const [bpm, setBpm] = useState([100])
    const [playing, setPlaying] = useState([false])


    return (
        <div className="metronome">
        <div className="bpm-slider">
        <div>{bpm} BPM</div>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm} />
        </div>
        <button>
          {playing ? 'Stop' : 'Start'}
        </button>
      </div>
    )
}
