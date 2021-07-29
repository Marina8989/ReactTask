import React, {useState} from 'react';


function Task() {
    const [data, setData] =useState([
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
        <>
           {data.map(item => {
              const {id, text} = item;
              return (
                  <h4 key={id}>{text}</h4>
              )
           })}
        </>
    )
}

export default Task
