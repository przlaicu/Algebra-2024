import { useState } from "react";

export default function Counter() {

    const [add, setCount] = useState(0);


    return (
        <div>
            <h1>Counter</h1>
            <p>{add}</p>
            <button onClick={() => setCount(add + 1)}> + </button>
            <button onClick={() => setCount(add - 1)}> - </button>
        </div>
    );
}