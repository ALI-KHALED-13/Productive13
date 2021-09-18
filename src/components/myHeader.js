import photo from '../media/ph.png'

const MyHeader =()=>{
    
    return (
        <header>
            <img src={photo} alt="productive"/>
            <div> 
                <h1>Productive</h1>
                <p>your work managment area</p>
            </div>
        </header>
    );
}

export default MyHeader;