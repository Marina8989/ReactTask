import React, {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';


function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Laundry',
            day: '09.24.21'
        },
        {
            id: 2,
            text: 'Grocery Shopping',
            day: '10.04.21'
        },
        {
            id: 3,
            text: 'Read Book',
            day: '05.14.21'
        },
        {
            id: 4,
            text: 'Walk Dog',
            day: '02.05.21'
        },
    ]);

    const onDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
   
    const alertText = 'No Tasks Left at the Moment';
    return (
        <div className='container'>
            <Header />
            {
                tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={onDelete}/>) : <h4 style={{color: 'red', textAlign: 'center', fontSize: '17px', paddingTop: '1rem'}}>{alertText}</h4>
            }
        </div>
    )
}

export default App