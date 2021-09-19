const NoteCard =(props)=>{
    return (
        <div className="note" >
            <h2 style={{fontWeight: 'bold'}} contentEditable >{props.title}</h2>
            <hr/>
            <p contentEditable>{props.content}</p>
        </div>
    );
}
export default NoteCard