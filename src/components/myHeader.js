import { useState } from 'react';
import photo from '../media/ph.png'
import ost from '../media/main_ost.mp3'

const MyHeader =()=>{
    const [name, setName] = useState('');
    const handleClick =()=>{
        const backMusic = document.getElementById('backMusic');
        backMusic.play();
        setName('retract');
    }
    return (
        <header className={name}>
            <img src={photo} alt="productive"/>
            <div> 
                <h1>Productive</h1>
                <p>your work managment area</p>
                {name? null: <span onClick={handleClick} > Let's Go! </span>}
            </div>
            <audio id="backMusic">
                <source src={ost} type="audio/mpeg" />
            </audio>
        </header>
    );
}

export default MyHeader;