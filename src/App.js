import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            name: null,
            message: null,
        }
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(ev){
        const name = ev.target.parentElement.firstElementChild.value;
        const message = ev.target.parentElement.querySelector('textarea').value;
        this.setState({name, message});
        alert(JSON.stringify(this.state, null, 2), 1000)
    }
    render(){
        return (
        <form style={{textAlign: 'center'}}>
            <input type="text" maxLength="20" size="21" placeholder="your full name"/> <br />
            <textarea placeholder="some bla about yourself"></textarea> <br /> <br />
            <button onClick={this.handleAdd} type="button"> Show </button>
        </form>);
    }
}

export default App;