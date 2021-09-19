import { useState } from "react/cjs/react.development";

const ItemForm =({forms, reset, setStock, stock})=>{
    const [title, setTitle] = useState('');
    const [listType, setListType] = useState('');
    const [body, setBody] = useState("");
    let selected = null;

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
        const content = categ === 'list'? body.trim().split('\n'): body;
        const obj = {title, listType, content}
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
                onClick={()=> {
                    setTitle(''); setListType(''); setBody('');
                    reset({...forms, [selected]:false});
                }}
                className="exit"
            >X</span>
            <form onSubmit={handleSave}>
                <input 
                name="title"
                maxLength="30" 
                placeholder="set a title" 
                value={title} 
                onChange={handleChange}
                required
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
                selected !== 'list'? 
                        <textarea
                        name="body" 
                        placeholder='your note content' 
                        value={body} 
                        onChange={handleChange}
                        required
                        />:
                        <textarea
                        name="body"
                        onChange={handleChange}
                        value={body}
                        placeholder="separate your list items into separate lines"
                        required
                        />
                }

                <input type="submit" value="Save" /> 
            </form>
        </div>
    );

}
export default ItemForm;