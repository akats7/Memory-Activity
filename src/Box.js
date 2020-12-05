import React from 'react'
import './Box.css'

function Box({color, flip}){
    return (
        <div onClick={flip} className='box'style={{backgroundColor: color}}>
            
        </div>
    )
}

export default Box