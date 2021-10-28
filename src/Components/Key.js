import React from 'react'

export default function Key() {
    return (
      <div>
        <span>
          <select name="keyselect" id="keyselect" className="key">
            <option value="a">A</option>  
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
            <option value="e">E</option>
            <option value="f">F</option>
            <option value="g">G</option>
          </select>
        </span>
      </div>
    );
}
