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
                    useMemo(()=>{ //so rerenders only when updates occur to this section, performance up
                        return notes.map(note=> <NoteCard key={note.id} note={note} notes={notes} updateNotes={updateNotes}/>)
                    }, [notes])
                    }
                </div>
            </section>
            <hr />
            <section>
                <h2>LISTS</h2>
                <div className="container">
                    {
                    useMemo(()=>{
                        return lists.map(list=> <ListCard key={list.id} list={list} lists={lists} updateLists={updateLists}/>)
                    }, [lists])
                    }
                </div>
            </section>
            <hr />
            <section>
                <h2>Reminders</h2>
                <div className="container">
                    {
                    useMemo(()=>{
                        return reminders.map(reminder=>  <RemindCard key={reminder.id} reminder={reminder} reminders={reminders} updateReminders={updateReminders}/>) 
                    }, [reminders])
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
