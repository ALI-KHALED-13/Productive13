const RemindCard =({reminder, reminders, updateReminders})=>{
    
    const handleDelete =(ev)=> updateReminders(reminders.filter(obj=> obj !== reminder)); //universal function imported? performance? localStorage?

    return (
        <div className="reminder" >
            <h2 style={{fontWeight: 'bold'}} contentEditable suppressContentEditableWarning >{reminder.title}</h2>
            <hr/>
            <p contentEditable suppressContentEditableWarning>{reminder.content}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
export default RemindCard