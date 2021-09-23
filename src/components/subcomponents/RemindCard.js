import React from 'react';

const RemindCard =({reminder, reminders, updateReminders, playAlert})=>{
    
    const handleDelete =(ev)=> {
        ev.target.parentElement.style.animation = 'fadeOutLeft 1s';
        setTimeout(()=> updateReminders(reminders.filter(obj=> obj !== reminder)), 600);
    }

    setTimeout(()=>{
        playAlert().then(()=> alert("it's time for " + reminder.title));
    }, (new Date(reminder.date).getTime() - Date.now()))


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

