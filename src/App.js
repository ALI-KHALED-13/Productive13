import React, {Component} from "react"


class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: 18,
            gender: null,
            dietRestrictions: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(ev){
        const {name, value, type} = ev.target;
        if (type === 'checkbox'){
            let restrictions = [...this.state.dietRestrictions];
            !restrictions.includes(value)? restrictions.push(value):
                                        restrictions.splice(restrictions.indexOf(value), 1);
            this.setState({dietRestrictions: restrictions});
        }else{
            this.setState({[name]: value})
        };
    }

    render() {

        return (
            <main>
                <form>
                    <input 
                    placeholder="First Name" 
                    name='firstName' 
                    value={this.state.firstName}
                    onChange={this.handleChange} 
                    /> <br />
                    <input 
                    placeholder="Last Name" 
                    name='lastName' 
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    /> <br />
                    <input 
                    placeholder="Age" type="number" 
                    name="age" 
                    value={this.state.age}
                    onChange={this.handleChange}
                    /> <br />
                    
                    <label htmlFor="male">
                    <input type='radio' name="gender" value="male" id='male' onChange={this.handleChange}/> Male
                    </label>
                    <br />
                    
                    <label htmlFor="female">
                    <input type='radio' name="gender" value="female" id='female' onChange={this.handleChange}/> Female
                    </label>
                    <br />
                    <p>
                        Dietry Rstrictions: <br />
                        <label htmlFor="gluten"> <input 
                        type='checkbox' 
                        value="gluten" 
                        id="gluten"
                        onChange={this.handleChange}
                        checked={this.state.dietRestrictions.includes('gluten')}
                        /> Gluten </label>
                        <label htmlFor="nuts"> <input 
                        type='checkbox' 
                        value="nuts" 
                        id="nuts"
                        onChange={this.handleChange}
                        checked={this.state.dietRestrictions.includes('nuts')}
                        />  Nuts </label>
                        <label htmlFor="grapefruite"> <input 
                        type='checkbox' 
                        value="grapefruite" 
                        id="grapefruite"
                        onChange={this.handleChange}
                        checked={this.state.dietRestrictions.includes('grapefruite')}
                        /> Grapefruite </label>
                    </p> 
                    <br />
                    
                    <button>Submit</button>
                </form>

                <hr />

                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName} </p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {/* Destination here */}</p>
                <p>
                    Your dietary restrictions:-  {this.state.dietRestrictions.join(', ')}
                </p>
            </main>
        )
    }
}

export default App
