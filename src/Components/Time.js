import React from 'react'
import Dropdown from './Dropdown'
import { useState, useEffect } from "react"

export default function Time() {
    const [time, setTime] = useState(4)

  const handleKeyChange = (e) => {
    e.preventDefault()
    let time = e.target.value
    setTime(time)
  }
  
    return (
        <div>
            <span>
            <Dropdown/>
            time={time}
            </span>
        
        </div>
    )
}
