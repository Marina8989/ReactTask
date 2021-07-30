import React from 'react'

const Button = ({color, onAdd }) => {

   
    
    return (
    <button style={{backgroundColor: color}} 
      className="addBtn" onClick={onAdd}>Add</button>
    )
}

export default Button
