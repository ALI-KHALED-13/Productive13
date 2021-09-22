import React from 'react';

const RemindCard =({reminder, reminders, updateReminders})=>{
    
    const handleDelete =()=> updateReminders(reminders.filter(obj=> obj !== reminder)); //universal function imported? performance? localStorage?

    return (
        <div className="reminder" >
            <h2 className="title" >{reminder.title}</h2>
            <hr/>
            <p>to be done at {reminder.date.replace("T", " > ")}</p>

            <br />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
export default React.memo(RemindCard);

// audio notification ?