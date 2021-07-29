import React from 'react';

const data = [
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
]

function Tasks() {
    return (
        <>
            {data.map(item => {
                return (
                    <h4 key={item.id}>{item.text}</h4>
                )
            })}
        </>
    )
}

export default Tasks
