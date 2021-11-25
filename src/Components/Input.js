import React from 'react'

export default function Input() {
    return (
        <div>
            <form>
                <label>
                 Song: 
                    <input type="text" name="name" />
                </label>
                 <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
