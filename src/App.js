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
    return (
        <div className='container'>
            <Header />
            <Tasks tasks={tasks}/>
        </div>
    )
}

export default App