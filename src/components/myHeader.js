import { useState } from 'react';
import photo from '../media/ph.png'

const MyHeader =()=>{
    const [name, setName] = useState('')
    return (
        <header className={name}>
            <img src={photo} alt="productive"/>
            <div> 
                <h1>Productive</h1>
                <p>your work managment area</p>
                {name? null: <span onClick={()=>setName('retract')} > Let's Goooo </span>}
            </div>
        </header>
    );
}

export default MyHeader;