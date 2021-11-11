import React from "react";
import { useState, useEffect } from "react";

export default function Dropdown() {
  const [time, setTime] = useState(4)

  const handleTimeChange = (e) => {
    e.preventDefault()
    let time = e.target.value
    setTime(time)
  }
  
  return (
    <div>
        <span>
      <select name="selectList" id="selectList" className="time" onClick={handleTimeChange}>
        <option value="3">3/4</option>
          <option value="4">4/4</option> {" "}
        <option value="6">6/8</option>
      </select>
        time={time}
        </span>
    </div>
  );
}
