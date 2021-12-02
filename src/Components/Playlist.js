import React from 'react'
import { useState } from 'react'

export default function Playlist() {

    const [playlist, setPlaylist] = useState('')

    const handePlaylistChange = (e) => {
        e.preventDefault()
        let playlist = e.target.value
        setPlaylist(playlist)
 }

    return (
      <div>
        Add to Playlist:{" "}
        <span>
          <select
            name="playList"
            id="playList"
            className="time"
            onClick={handePlaylistChange}
          >
              <option value="Practice">Practice</option>  
              <option value="Preformance">Preformance</option>
              <option value="Other">Other</option>
          </select>
          
        </span>
        Playlist = {playlist}
      </div>
    );
}


{/* <div>
<span>
<select name="playList" id="playList" className="time" onClick={handleTimeChange}>
  <option value="4">4/4</option> {" "}
<option value="3">3/4</option>
<option value="6">6/8</option>
</select>
time={time}
</span>
</div> */}

// const [time, setTime] = useState(4)

// const handleTimeChange = (e) => {
//   e.preventDefault()
//   let time = e.target.value
//   setTime(time)
// }