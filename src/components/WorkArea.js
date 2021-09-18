
const WorkArea =()=>{
    //useeffect on mount to fetch from localSorage
    const handleOptions =(ev)=>{
        if (ev.target.nodeName === "DIV") return;
        ev.target.querySelector('.options').classList.toggle('show')
    }

    return (
    <main>
        <aside onClick={handleOptions}>
            Add
            <div className='options'>
                <div>Note</div>
                <div>List</div>
                <div>Reminder</div>
            </div>
        </aside>
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