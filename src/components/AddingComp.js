import React from 'react'
import { useState } from 'react';
import ItemForm  from "./subcomponents/ItemForm";
const AddingComp =({stock, setStock})=>{

    const [formsShown, setFormShown] = useState({note: false, list: false, reminder: false});
    const [text, seText] = useState('Add')

    const handleOptions =(ev)=>{
        if (ev.target.nodeName === "DIV") {
            const type = ev.target.textContent.toLowerCase();
            setFormShown({...formsShown, [type]: true}) ;
        }
        seText(text === "Add"? 'Undo':"Add");
        document.querySelector('.options').classList.toggle('show');     
    }

    return (
        <React.Fragment>
            <aside onClick={handleOptions} >
                {text}
                <div className='options'>
                    <div>Note</div>
                    <div>List</div>
                    <div>Reminder</div>
                </div>
            </aside>

            { 
            Object.values(formsShown).includes(true) &&
            <ItemForm 
                forms={formsShown} 
                reset={setFormShown}
                stock={stock}
                setStock={setStock}
            />
            }
        </React.Fragment>
    )
}

export default AddingComp;
