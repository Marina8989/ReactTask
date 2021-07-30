import React from 'react';

const AddTask = () => {
    return (
        <form>
            <div className="taskDiv divBlock">
                <label htmlFor="task">Task:</label><br/>
                <input type="text" name="task" id="task" className="task" />
            </div>
            <div className="dayDiv divBlock">
                <label htmlFor="day">Day & Times:</label><br/>
                <input type="text" name="day" id="day" className="day" />
            </div>
            <div className="reminderDiv divBlock">
                <label htmlFor="reminder">Reminder:</label>
                <input type="checkbox" />
            </div>
            <input className="btnSubmit" type="submit" value="Save" />
        </form>
    )
}

export default AddTask
