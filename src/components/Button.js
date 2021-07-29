import React from 'react'

function Button({onClick}) {
    return (
        <>
          <button className='addBtn' onClick={onClick}>Add</button>  
        </>
    )
}

export default Button
