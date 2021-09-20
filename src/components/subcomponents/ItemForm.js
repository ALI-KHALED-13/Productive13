import { useState } from "react/cjs/react.development";

const ItemForm =({forms, reset, setStock, stock})=>{
    const [title, setTitle] = useState('');
    const [listType, setListType] = useState('');
    const [body, setBody] = useState(``);
    const [date, setDate] = useState('');

    let selected = null;
    let d = new Date(Date.now() -  (new Date()).getTimezoneOffset() * 60 * 1000).toISOString(); // will be used very down in the date input/ toIso reset to the TZ to 0


    for (let key in forms) if (forms[key]) selected = key;


    const handleChange =(ev)=>{
        switch(ev.target.name){
            case 'title': setTitle(ev.target.value);
                break;
            case 'listType': setListType(ev.target.value);
                break;
            case 'body': setBody(ev.target.value);
                break;
            case 'date': setDate(ev.target.value);
                break;
            default: console.log('non applicable')

        }
    }

    const handleSave =(ev)=>{
        ev.preventDefault();
        const categ = selected;

        const content = categ !== 'list'? body: body.trim().split('\n').map(line=> {return {item:line, isChecked:false}});

        const obj = {title, listType, content, date ,id: categ + Math.floor(Date.now() / 5000)}
        const arr = [...stock[categ+'s']];
        arr.push(obj)

        switch(categ){
            case 'note': setStock.updateNotes(arr);
                break;
            case 'list': setStock.updateLists(arr);
                break;
            case 'reminder': 
                setStock.updateReminders(arr.sort((obj1, obj2)=> new Date(obj1.date) - new Date(obj2.date))) // to display the sooner to the left);
                break;
            default: console.log('not added')
        }

        setTitle(''); setListType(''); setBody('');

        reset({...forms, [selected]:false});
    }

    return (
        <div className="item-form">

            <span 
                onClick={()=> { setTitle(''); setListType(''); setBody(''); reset({...forms, [selected]:false});}}
                className="exit"
            >
                    X
            </span>

            <form onSubmit={handleSave}>

                <input 
                name="title"
                maxLength="30" 
                placeholder="set a title" 
                value={title} 
                onChange={handleChange}
                required
                autoFocus
                />
                {
                selected === 'list' && (
                    <select value={listType} onChange={handleChange} name="listType" required>
                        <option value="">choose your List type</option>
                        <option value="unordred">unordred</option>
                        <option value="ordered-decimal">ordred - regular numbers</option>
                        <option value="ordered-upper-roman">ordered - roman numbers</option>
                    </select>
                )
                }
                {
                selected === 'reminder'? null : <textarea
                                                    name="body"
                                                    onChange={handleChange}
                                                    value={body}
                                                    placeholder={selected === 'list'? "separate your list items into separate lines":
                                                                                    "your note content"}
                                                    required
                                                />
                        
                }
                
                {selected === 'reminder' && (
                    <input 
                        type="datetime-local" 
                        min={d.slice(0, d.lastIndexOf(':'))} //as the "value" prop of this type of input is in the form of yyyy-mm-ddThh:mm
                        value={date}
                        onChange={handleChange}
                        name="date"
                    />
                ) }

                <input type="submit" value="Save" /> 

            </form>

        </div>
    );

}
export default ItemForm;