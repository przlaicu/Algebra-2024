import { useState } from "react";

export default function Simpsons() {

    const [name, setName] = useName('Lisa');
    const [pic, setPick] = usePick('https://i.ebayimg.com/images/g/lQUAAOSw79hkMCwS/s-l960.webp');

    function changeSimpson() {
        if (name === 'Lisa')
    }

    return (
        <div>
            <h1>Who do you like more ?</h1>
            <input type="radio" onChange={changeSimpson}></input><label>Lisa</label>
            <input type="radio"></input><label>Bart</label>
            <hr></hr>
            <button onClick={() => setName('Bart')}>Submit</button>
            <hr></hr>
            <img src={() => setPick('https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png')}></img>
            <p>You liked at {name}</p>

        </div>
    );
}