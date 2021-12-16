import React from 'react'
import { useState } from 'react'

export default function Blinker() {
    
    const [blink, setBlink] = useState(false)
    const [counter, useCounter] = useState(0)

    const blinking = () => {
        setBlink(blink + 1)
    }
    return (


        <div className='blinker'>
            The blinker is currenty at {blink}
            <button onClick={() => setBlink(blink + 1)}>
                
            </button>
        </div>
    )
}
