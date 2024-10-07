import { Component } from "react";

export default class Exercise extends Component {

    state = {
        users: [
            { id: 1, name: 'Pepita', year: 20 },
            { id: 2, name: 'Jozefina', year: 29 },
            { id: 3, name: 'Marica', year: 24 }
        ]
    }

    render() {

        this.state.users.map(user => {
            this.user.Id,
            this.user.name,
            this.user.year
        })

        return (
            <div>
                <h1>Exercise</h1>
                <ul>
                    <User id={user.id} name={user.name} year={user.year}/>
                </ul>
            </div>
        );
    }
}

function User({id, name, year}) {
    return(
        <div>
            <h1>Bok user</h1>
        </div>       
    );
}