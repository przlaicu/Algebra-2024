
import { useState } from "react";

export default function FunctionalExample() {
    
    const[value, setValue] = useState('Placehoder');

    const changeValue = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.setValue(value);
        alert(value);
    }
    
    return(
        <div>
            <h1>Functional Example</h1>
            <form>
                <input type="text" value={value} onChange={changeValue}></input>
                <button type="submit" onChange={handleSubmit}>Submit Data</button>
            </form>
        </div>
    );
}