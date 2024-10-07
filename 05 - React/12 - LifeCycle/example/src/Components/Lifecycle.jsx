import { Component } from "react";

export default class Lifecycle extends Component {
    
    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did mount");
        this.getData();
    }
    
    getData = () => {
        console.log("Fetch data form server.....");
    };
    
    render() {
        return (
            <div>
                <h3>Hello Africa</h3>
            </div>
        );
    }
}