import { useState } from "react/cjs/react.development";

const ItemForm =({forms, reset, setStock, stock})=>{
    const [title, setTitle] = useState('');
    const [listType, setListType] = useState('');
    const [body, setBody] = useState(``);
    let selected = null;
    let d = new Date().toISOString();

    for (let key in forms) if (forms[key]) selected = key;


    const handleChange =(ev)=>{
        switch(ev.target.name){
            case 'title': setTitle(ev.target.value);
                break;
            case 'listType': setListType(ev.target.value);
                break;
            case 'body': setBody(ev.target.value);
                break;
            default: console.log('non applicable')

        }
    }

    const handleSave =(ev)=>{
        ev.preventDefault();
        const categ = selected;

        const content = categ !== 'list'? body: body.trim().split('\n').map(line=> {return {item:line, isChecked:false}});
        const obj = {title, listType, content, id: categ + Math.floor(Date.now() / 5000)}
        const arr = [...stock[categ+'s']];
        arr.push(obj)

        switch(categ){
            case 'note': setStock.updateNotes(arr);
                break;
            case 'list': setStock.updateLists(arr);
                break;
            case 'reminder': setStock.updateReminders(arr);
                break;
            default: console.log('non added')

        }

        setTitle(''); setListType(''); setBody('');

        reset({...forms, [selected]:false});
    }

    return (
        <div className="item-form">
            <span 
                onClick={()=> { setTitle(''); setListType(''); setBody('');reset({...forms, [selected]:false});}}
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
                selected === 'list'? 
                        <textarea
                        name="body"
                        onChange={handleChange}
                        value={body}
                        placeholder="separate your list items into separate lines"
                        required
                        />:
                        <textarea
                        name="body" 
                        placeholder='your note content' 
                        value={body} 
                        onChange={handleChange}
                        required
                        />
                }
                <input type="datetime-local" min={d.slice(0, d.lastIndexOf(':'))} disabled={selected !== 'reminder'}/> 
                <input type="submit" value="Save" /> 
            </form>
        </div>
    );

}
export default ItemForm;