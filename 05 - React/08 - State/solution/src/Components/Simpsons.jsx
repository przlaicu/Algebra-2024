import { Component } from "react";

export default class Simpsons extends Component{
    
    state = {
        imageUrl: 'https://i.ebayimg.com/images/g/lQUAAOSw79hkMCwS/s-l960.webp',
        name: 'Lisa',
        bestFriend: 'Janey Powell',
        likeSchool: true,
        backgroundColor: '#ff81c1'
    }

    changeSate = () => {
        console.log();
        this.setState(
            {
                imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
                name: 'Bart',
                bestFriend: 'Milhouse Van Houten',
                likeSchool: false,
                backgroundColor: '#2f64d6'
            }
        );
    }

    render() {
        return (
            <div>
                
                <img src={this.state.imageUrl}/>
                <p>Name: {this.state.name}</p>
                <p>Best Frined is: {this.state.bestFriend}</p>
                <p>Likes School: {this.state.likeSchool}</p>
                <p>Background color: {this.state.backgroundColor}</p>
                <button onClick={this.changeSate()}>Change Simpsons</button>
            </div>
        );
    }
}