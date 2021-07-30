import React from 'react'

function Button({color, onClick}) {
    return <button style={{backgroundColor: color}} className="addBtn" onClick={onClick}>Add</button>
}

export default Button
