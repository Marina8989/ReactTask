import React from 'react';
import {FaTimes} from 'react-icons/fa';

const Task = ({task, onDelete, onToggle}) => {
  
    return (
        <div className={`${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3 className="task">{task.text}{' '}<FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <p className="taskPar">{task.day}</p>
        </div>
    )
}

export default Task
