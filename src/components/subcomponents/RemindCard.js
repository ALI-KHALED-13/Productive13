import React from 'react';

const RemindCard =({reminder, reminders, updateReminders})=>{
    
    const handleDelete =()=> updateReminders(reminders.filter(obj=> obj !== reminder)); //universal function imported? performance? localStorage?
    console.log('remind')
    return (
        <div className="reminder" >
            <h2 style={{fontWeight: 'bold'}} contentEditable suppressContentEditableWarning >{reminder.title}</h2>
            <hr/>
            <p contentEditable suppressContentEditableWarning>to be done at {reminder.date.replace("T", " > ")}</p>

            <br />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
export default React.memo(RemindCard);

// audio notification ?