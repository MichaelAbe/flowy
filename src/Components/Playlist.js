import React from 'react'

export default function Playlist() {
    return (
      <div>
        Add to Playlist:{" "}
        <span>
          <select
            name="playList"
            id="playList"
            className="time"
            
          >
              <option value="Practice">Practice</option>  
              <option value="Preformance">Preformance</option>
              <option value="Other">Other</option>
          </select>
          
        </span>
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