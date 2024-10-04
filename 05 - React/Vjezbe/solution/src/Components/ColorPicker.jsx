import { useState } from "react"

export default function ColorPicker() {


    const [color, setColor] = useState('#E6E6FA')

    return (
        <div>
            <h1>Color Picker</h1>
            <div style={{ width: '400px', height: '100px', backgroundColor: color }}>
            </div>
            <p>Select color</p>
            <input type="color" style={{ width: '400px', height: '50px' }} onChange={(e) => setColor(e.target.value)} value={color}></input>
            <p>Selected color is: {color}</p>
        </div >
    )
}