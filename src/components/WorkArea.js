import { useState, useMemo} from 'react';
import NoteCard from './subcomponents/NoteCard';
import ListCard from './subcomponents/ListCard';
import RemindCard from './subcomponents/RemindCard';
import AddingComp from './AddingComp';
const WorkArea = ({data, type})=>{
    const [notes, updateNotes] = useState([]);
    const [lists, updateLists] = useState([]);
    const [reminders, updateReminders] = useState([]);
    

    return (
        <main>
            <section>
                <h2>NOTES</h2>
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
                <h2>Reminders</h2>
                <div className="container">
                    {
                    reminders.map(reminder=>  <RemindCard key={reminder.id} reminder={reminder} reminders={reminders} updateReminders={updateReminders}/>) 
                    }
                </div>
            </section>

            <AddingComp 
                setStock={{updateLists, updateNotes, updateReminders}}
                stock={{notes, lists, reminders}}
            />
        </main>
    );
};

export default WorkArea;
