import React from 'react';

const NoteCard =({ note, notes, updateNotes})=>{

    const handleDelete =()=> updateNotes(notes.filter(obj=> obj !== note)); //universal function imported? performance? localStorage?

    const handleEdit =(ev)=> {
        const changedProp = ev.target.className;
        const newValue = ev.target.textContent.trim();

        updateNotes(notes.map(obj=> obj !== note? obj: {...obj, [changedProp]: newValue}));
    }

    return (
        <div className="note" >
            <h2 className='title' contentEditable onBlur={handleEdit} suppressContentEditableWarning >{note.title}</h2>
            <hr/>
            <p contentEditable onBlur={handleEdit} className="content" suppressContentEditableWarning> {note.content} </p>
            <br />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
export default React.memo(NoteCard);