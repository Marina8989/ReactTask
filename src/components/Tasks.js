import React,{useState} from 'react';
import Task from './Task';


function Tasks() {
    const [data, setData] = useState([
    {
        id: 1,
        text: 'Do Laundry',
        complete: true
    },
    {
        id: 2,
        text: 'Grocery Shopping',
        complete: false
    },
    {
        id: 3,
        text: 'Walk Dog',
        complete: true
    },
    {
        id: 4,
        text: 'Clean House',
        complete: true
    },
]);

    return (
        <div className="taskBlock">
          {data.map(task => {
              const {id, text} = task;
              return (
                  <Task key={id} text={text}/>
              )
          })}
        </div>
    )
}

export default Tasks
