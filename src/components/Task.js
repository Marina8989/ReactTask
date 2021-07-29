import React from 'react';
import {FaTimes} from 'react-icons/fa';

function Task({text}) {
    return (
        <div className="task">
          <h3>{text}</h3><FaTimes style={{color: 'red'}} className="icon"/>
        </div>
    )
}

export default Task
