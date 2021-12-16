import React from 'react'
import { useState } from 'react'

export default function Blinker() {
    
    const [blink, useBlink] = useState(false)
    const [counter, useCounter] = useState(0)

    const blinking = () => {
        setBlink(blink + 1)
    }
    return (


        <div className='blinker'>
            Blinker
            {counter}
        </div>
    )
}
