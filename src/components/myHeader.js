import { useState } from 'react';
import photo from '../media/ph.png'
import introMusic from '../media/intro.mp3'
import backMusic from '../media/the_loop.mp3'

const MyHeader =()=>{
    const [name, setName] = useState('');
    const handleClick =()=>{
        document.getElementById('introMusic').play();
        const backMusic = document.getElementById('backMusic');
        backMusic.volume = 0.9;
        setTimeout(()=> backMusic.play(), 7500);
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
            <audio id="introMusic">
                <source src={introMusic} type="audio/mpeg" />
            </audio>
            <audio id="backMusic" loop>
                <source src={backMusic} type="audio/mpeg" />
            </audio>
        </header>
    );
}

export default MyHeader;