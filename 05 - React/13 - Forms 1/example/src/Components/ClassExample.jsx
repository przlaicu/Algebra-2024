import { Component } from "react";

export default class ClassExample extends Component {
    
    state = {
        value: 'Placehoder',
    }
    
    changeValue = (e) => {

        this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(this.state.value);
    }

    render() {
        return(
            <div>
                <h1>Class Example</h1>
                <form>
                    <input type="text" value={this.state.value} onChange={this.changeValue}/>
                    <button type="submit">Submit Data</button>
                </form>
            </div>
        );
    }

}