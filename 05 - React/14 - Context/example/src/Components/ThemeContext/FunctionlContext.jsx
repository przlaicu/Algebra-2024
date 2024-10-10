
import { ThemeContext } from "./Theme";
import { useContext } from "react";

export default function FunctionalContext() {
    
    const darkTheme = useContext(ThemeContext);


    const themeStyle = {
        padding: '2rem',
        margin: '2rem',
        color: darkTheme ? '#CCC' :'#333',
        backgroundColor: darkTheme ? '#333' : '#CCC' ,
    };
    
    return(
        <div style={themeStyle}>
            <h1>Functional context example</h1>
        </div>
    );
}