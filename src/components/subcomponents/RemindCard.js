import React, { useState } from 'react';

const RemindCard =({reminder, reminders, updateReminders, playAlert})=>{
    const [fired, setFired] = useState(false);

    const handleDelete =(ev)=> {
        ev.target.parentElement.style.animation = 'fadeOutLeft 1s';
        setTimeout(()=> updateReminders(reminders.filter(obj=> obj !== reminder)), 600);
        clearTimeout(timerId);
    }

    const timeTillAlert = new Date(reminder.date).getTime() - Date.now();

    const timerId = setTimeout(fireAlert, timeTillAlert);
    if (timeTillAlert <= 0) {
        clearTimeout(timerId);
        if(!fired) setFired(true);
    }

    function fireAlert(){
        playAlert();
        setFired(true);
        setTimeout(()=> alert("it's time for " + reminder.title), 500);
    }

    return (
        <div className={"reminder" + (fired? " passed":"")} >
            <h2 className="title" >{reminder.title}</h2>
            <hr/>
            <p>to be done at {reminder.date.replace("T", " > ")}</p>

            <br />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
export default React.memo(RemindCard);

