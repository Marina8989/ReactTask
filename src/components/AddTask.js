import React, {useState} from 'react';

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('yes clicked');

        if(!text) {
           alert('Please enter task');
           return;
        }
        onAdd({text, day, reminder});


        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="taskDiv divBlock">
                <label htmlFor="task">Task:</label><br/>
                <input type="text" name="task" id="task" className="task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="dayDiv divBlock">
                <label htmlFor="day">Day & Times:</label><br/>
                <input type="text" name="day" id="day" className="day" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="reminderDiv divBlock">
                <label htmlFor="reminder">Reminder:</label>
                <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input className="btnSubmit" type="submit" value="Save" />
        </form>
    )
}

export default AddTask
