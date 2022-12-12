import { useState, useRef} from 'react';
import './styles.css';

import photo from '../../media/ph.png'
import introMusic from '../../media/intro.mp3'
import backMusic from '../../media/the_loop.mp3'


const MyHeader =()=>{
    const [retractHeader, setRetractHeader] = useState(false);
    const introAudioRef = useRef();
    const backgroundAudioRef = useRef();

    const handleClick =(ev)=>{
        introAudioRef.current.volume = 0.75;
        introAudioRef.current.play();

        ev.target.style.animation = 'fadeOutLeft 3s forwards'
        setTimeout(()=> setRetractHeader(true), 2750);
    }

    const playAppMusic =(ev)=> {
        backgroundAudioRef.current.volume = 0.3;
        backgroundAudioRef.current.play()
    }

    document.addEventListener("visibilitychange", function() {
        if (retractHeader){
            if (document.visibilityState === 'visible') {
                backgroundAudioRef.current?.play();
            } else {
                backgroundAudioRef.current?.pause();
            }
        }    
    });

    
    
    return (
        <header className={retractHeader? 'retract': ''}>
            <img src={photo} alt="productive"/>
            <div> 
                <h1>Productive</h1>
                <p>your life managment app</p>
                {retractHeader? null : <span onClick={handleClick} >Let's Go!</span>}
            </div>
            <audio id="introMusic" ref={introAudioRef} onEnded={playAppMusic}>
                <source src={introMusic} type="audio/mpeg" />
            </audio>
            <audio id="backMusic" loop ref={backgroundAudioRef}>
                <source src={backMusic} type="audio/mpeg" />
            </audio>
        </header>
    );
}

export default MyHeader;