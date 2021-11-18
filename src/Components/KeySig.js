import React from 'react'
import { useState, useEffect } from "react";

export default function Key() {
  const [key, setKey] = useState("C")

  const handleKeyChange = (e) => {
    e.preventDefault()
    let key = e.target.value
    setKey(key)
  }
  

    return (
      <div>
        <span>
          <select name="keyselect" id="keyselect" className="keyselect" onClick={handleKeyChange}>
            <option value="A">A</option>  
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="Db">Db</option>
            <option value="C#">C#</option>
            <option value="Eb">Eb</option>
            <option value="Gb">Gb</option>
            <option value="F#">F#</option>
            <option value="Ab">Ab</option>
            <option value="Bb">Bb</option>
          </select>
        </span>
        key={key}
      </div>
    );
}
