import React, {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
    const [showTaskText, setShowTaskText] = useState(false)
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
    // add new task to list
    const addTask = (task) => {
      let id = Math.floor(Math.random() * 10000) + 1;
      let newTask = {id, ...task};
      console.log(newTask);
      setTasks([...tasks, newTask]);
    }
    // delete task
    const onDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    // toggle reminder
    const onToggle = (id) => {
       setTasks(tasks.map(task => task.id === id ? {...task, reminder : !task.reminder} : task))
    }
   

    
    const alertText = 'No Tasks To Show';
    return (
        <div className='container'>
            <Header onAdd={() => setShowTaskText(!showTaskText)}/>
            {showTaskText && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle}/>) : <h4 style={{ textAlign: 'center', paddingTop: '1rem'}}>{alertText}</h4>}
        </div>
    )
}

export default App