import React, { Children } from 'react'
import './Button.css'

export const Button=({children})=> {
    return (
        <div>
            <button className='btn'>
                {children}
            </button>
        </div>
    )
}
