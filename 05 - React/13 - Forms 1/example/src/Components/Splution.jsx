import { useState } from "react";

export default function Solution() {
    
    const [value, setValue] = useState('Unesite text');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        alert(value);
    }


    return(
        <div>
            <input type="text" value={value} onChange={handleChange}></input>
            <button type="submit" onChange={handleSubmit}>Potvrdi unos</button>
        </div>
    );
}