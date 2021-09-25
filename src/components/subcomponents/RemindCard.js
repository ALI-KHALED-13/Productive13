import React from 'react';

const RemindCard =({reminder, reminders, updateReminders, playAlert})=>{
    
    const handleDelete =(ev)=> {
        ev.target.parentElement.style.animation = 'fadeOutLeft 1s';
        setTimeout(()=> updateReminders(reminders.filter(obj=> obj !== reminder)), 600);
    }
    const timeTillAlert = new Date(reminder.date).getTime() - Date.now();

    timeTillAlert > 0 && setTimeout(()=> {
        playAlert().then(()=> setTimeout(()=> alert("it's time for " + reminder.title), 700));
    } , timeTillAlert);


    return (
        <div className={"reminder" + (timeTillAlert > 0? '':" passed")} >
            <h2 className="title" >{reminder.title}</h2>
            <hr/>
            <p>to be done at {reminder.date.replace("T", " > ")}</p>

            <br />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
export default React.memo(RemindCard);

