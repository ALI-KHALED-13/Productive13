import alertSFX from '../media/reminderSFX.mp3';
import { useState } from 'react';
import NoteCard from './subcomponents/NoteCard';
import ListCard from './subcomponents/ListCard';
import RemindCard from './subcomponents/RemindCard';
import AddingComp from './AddingComp';

const WorkArea = ({data})=>{
    const [notes, updateNotes] = useState(data.notes);
    const [lists, updateLists] = useState(data.lists);
    const [reminders, updateReminders] = useState(data.reminders);

    document.addEventListener("visibilitychange", (ev)=>{
        const dataStr = JSON.stringify({notes, lists, reminders});
        localStorage.setItem('data', dataStr);
    })
    
    const playAlert =()=>{
        const alertSFX = document.getElementById('alertSFX');
        alertSFX.volume = 0.3;
        return alertSFX.play();
    }
    return (
        <main >
            <section>
                <h2>NOTES <sup>editable*</sup></h2> 
                <div className="container">
                    {
                    notes.map(note=> <NoteCard key={note.id} note={note} notes={notes} updateNotes={updateNotes}/>)
                    }
                </div>
            </section>
            <hr />
            <section>
                <h2>LISTS</h2>
                <div className="container">
                    {
                    lists.map(list=> <ListCard key={list.id} list={list} lists={lists} updateLists={updateLists}/>)
                    }
                </div>
            </section>
            <hr />
            <section>
                <h2>Reminders <sup>automatically arranged*</sup></h2>
                <div className="container">
                    {
                    reminders.map(reminder=>  <RemindCard key={reminder.id} reminder={reminder} 
                                   reminders={reminders} updateReminders={updateReminders} playAlert={playAlert}/>) 
                    }
                </div>
            </section>

            <AddingComp 
                setStock={{updateLists, updateNotes, updateReminders}}
                stock={{notes, lists, reminders}}
            />

            <audio id="alertSFX">
                <source src={alertSFX} type="audio/mpeg" />
            </audio>
        </main>
    );
};

export default WorkArea;
