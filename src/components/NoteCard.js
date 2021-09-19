const NoteCard =(props)=>{
    return (
        <div className="note" contentEditable>
            <h2>{props.title}</h2>
            <hr/>
            <p>{props.content}</p>
        </div>
    );
}
export default NoteCard