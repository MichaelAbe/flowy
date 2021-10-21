import React from "react";

export default function Dropdown() {
  return (
    <div>
        <span>
      <select name="selectList" id="selectList" className="time">
          <option value="4">4/4</option> {" "}
        <option value="6">6/8</option>
      </select>

        </span>
    </div>
  );
}
