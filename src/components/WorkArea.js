import { useState } from "react";
import ItemForm from './ItemForm';

const WorkArea =()=>{
    //useeffect on mount to fetch from localSorage
    const [formsShown, setFormShown] = useState({note: false, list: false, reminder: false});
    const notes = [];
    const lists = [];
    const reminders = [];

    const handleOptions =(ev)=>{
        if (ev.target.nodeName === "DIV") {
            const type = ev.target.textContent.toLowerCase();
            setFormShown({...formsShown, [type]: true}) ;
        } 
        document.querySelector('.options').classList.toggle('show');     
    }

    return (
    <main>
        <aside onClick={handleOptions} >
            Add
            <div className='options'>
                <div>Note</div>
                <div>List</div>
                <div>Reminder</div>
            </div>
        </aside>

        <section>
            <h2> Notes </h2>
            <div className="notes">
                {notes.map((note)=> console)}
            </div>
        </section>
        <hr />
        <section>
            <h2> Lists </h2>
            <div className="Lists">
                {lists.map((list)=> console)}
            </div>
        </section>
        <hr />
        <section>
            <h2> Reminders </h2>
            <div className="Reminders">
                {reminders.map((reminder)=> console)}
            </div>
        </section>

        {/*the form area*/ }
           <ItemForm 
            forms={formsShown} 
            reset={setFormShown}
            notes={notes}
            lists={lists}
            reminders={reminders}
            />
    </main>
    );
}

export default WorkArea;

/*
note
list <ul>
reminder < date and attached audio>

each has the category with a color theme
*/