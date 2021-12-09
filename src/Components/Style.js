import React from 'react'
import { useState } from 'react'

export default function Style() {
    
    const [style, setStyle] = useState('')
    
    return (



        <div>
            Style component 

        </div>
    )
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