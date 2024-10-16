import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
  
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      headers: {
        'Content-Types': 'application/json',
      },
      body: JSON.stringify({
        query: `{
          country(code: "CH") {
            name
            native
            capital
            languages {
              code
              name
            }
          }
        }`,
      }),
    }).then(response => response.json())
    .then((data) => setData(data))
    .then((data) => setData(data.data.country));
  }, []);

  return (
    <div>
      <h1>{data.name} ({data.native})</h1>
      <h2>Capital: {data.capital}</h2>
      <h3>Language: {data.languages?.map((language)) => language.name.)}</h3>
    </div>
  );
}
