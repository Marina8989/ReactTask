import React from 'react';
import {FaTimes} from 'react-icons/fa';

function Task({task}) {
    console.log(task)
    return (
        <div>
            <h3 className="task">{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} /></h3>
            <p className="taskPar">{task.day}</p>
        </div>
    )
}

export default Task
