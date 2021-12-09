import React from "react";
import { useState } from "react";

export default function Style() {
  const [style, setStyle] = useState("N/A")

  const handleStyleChange = (e) => {
    e.preventDefault()
    let style = e.target.value
    setStyle(style)
  }

  return (
    <div>
      Select Style:{""}
      <span>
        <select
          name="style"
          id="style"
          className="time"
          onClick={handleStyleChange}
        >
          <option value="Straight">Straight</option> 
          <option value="Swing">Swing</option>
        </select>
      </span>
      Style = {style}
    </div>
  );
}

// const [playlist, setPlaylist] = useState('')

// const handePlaylistChange = (e) => {
//     e.preventDefault()
//     let playlist = e.target.value
//     setPlaylist(playlist)
// }

// return (
//   <div>
//     Add to Playlist:{" "}
//     <span>
//       <select
//         name="playList"
//         id="playList"
//         className="time"
//         onClick={handePlaylistChange}
//       >
//           <option value="Practice">Practice</option>
//           <option value="Preformance">Preformance</option>
//           <option value="Other">Other</option>
//       </select>

//     </span>
//     Playlist = {playlist}
//   </div>
// );
// }
