import { useState } from "react";

export default function Hooks() {

    const [count, setCount] = useState(0);
    const [age, setAge] = useState(27);
    const [fruit, setFruit] = useState('apple');

    /*Unutar return-a nema komantara prije može*/

    return (
        <div>
            <h1>Hooks Example</h1>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>Increase count</button>
            <hr />
            <p>The use John's Age {age} year old</p>
            <button onClick={() => setAge(30)}>Incirise Johns age</button>
            <hr />
            <p>Johns favorite fruit is {fruit}</p>
            <button onClick={() => setFruit('mango')}>Set to mango</button>
        </div>
    );
}