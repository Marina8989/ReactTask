import React, {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Laundry',
            day: '09.24.21',
            reminder: true
        },
        {
            id: 2,
            text: 'Grocery Shopping',
            day: '10.04.21',
            reminder: false
        },
        {
            id: 3,
            text: 'Read Book',
            day: '05.14.21',
            reminder: false
        },
        {
            id: 4,
            text: 'Walk Dog',
            day: '02.05.21',
            reminder: false
        },
    ]);

    const onDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    
    const onToggle = (id) => {
       setTasks(tasks.map(task => task.id === id ? {...task, reminder : !task.reminder} : task))
    }
   
    const alertText = 'No Tasks To Show';
    return (
        <div className='container'>
            <Header />
            <AddTask />
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle}/>) : <h4 style={{ textAlign: 'center', paddingTop: '1rem'}}>{alertText}</h4>}
        </div>
    )
}

export default App