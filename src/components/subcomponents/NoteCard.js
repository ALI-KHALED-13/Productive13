const NoteCard =({ note, notes, updateNotes})=>{

    const handleDelete =()=> updateNotes(notes.filter(obj=> obj !== note)); //universal function imported? performance? localStorage?

    return (
        <div className="note" >
            <h2 style={{fontWeight: 'bold'}} contentEditable suppressContentEditableWarning >{note.title}</h2>
            <hr/>
            <p contentEditable suppressContentEditableWarning> {note.content} </p>
            <br />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
export default NoteCard