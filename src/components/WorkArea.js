import { useState } from 'react';
import NoteCard from './NoteCard';
import ListCard from './ListCard';
import RemindCard from './RemindCard';
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
                    notes.map((note, ind)=> {
                        return <NoteCard key={ind} title={note.title} content={note.content}/>
                        })
                    }
                </div>
            </section>
            <hr />
            <section>
                <h2>LISTS</h2>
                <div className="container">
                    {
                    lists.map((list, ind)=> {
                    return <ListCard key={ind} title={list.title} content={list.content} listType={list.listType}/>
                    })
                    }
                </div>
            </section>
            <hr />
            <section>
                <h2>Reminders</h2>
                <div className="container">
                    {
                    reminders.map((reminder, ind)=> {
                        return <RemindCard key={ind} tite={reminder.title} content={reminder.content}/>
                    })
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
