import React from 'react'

export default function Playlist() {
    return (
      <div>
        Add to Playlist:{" "}
        <span>
          <select
            name="selectList"
            id="selectList"
            className="time"
            
          >
              <option value="4">4/4</option>  <option value="3">3/4</option>
            <option value="6">6/8</option>
          </select>
          
        </span>
      </div>
    );
}


{/* <div>
<span>
<select name="selectList" id="selectList" className="time" onClick={handleTimeChange}>
  <option value="4">4/4</option> {" "}
<option value="3">3/4</option>
<option value="6">6/8</option>
</select>
time={time}
</span>
</div> */}