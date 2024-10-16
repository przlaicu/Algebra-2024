import { useEffect, useState, useParams } from "react";


export default function NasaImage(date, explanation, title, url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=KXxS4yBLgTENXgJwJTCrsdCEPuMHjiDMIFcKJmZQ');
            if (!response.ok) {
                response.status === 404 && alert('Data not found');
                console.log(response.status);
                throw new Error('Response was not OK');
            }
            const result = await response.json();
            setData(result);
        } catch {
            setError(error)
        } finally {
            setLoading(false)
        };
        fetchData();
        console.log
    }
    
    return (
        <div>
            <h1>This is Nasa Image component</h1>
            <h1>NASA picture of day</h1>
            <p>{result.title}</p>
            <image src={result.url} />
            <p>{result.date}</p>
            <p>{result.explanation}</p>
        </div>
    );
}