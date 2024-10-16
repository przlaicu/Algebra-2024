import { useEffect } from "react";
import { useState } from "react";

export default function Request() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/graphql/", {
      method: "POST",
      headers: {
        ContentType: "applicationjson",
      },
      body: JSON.stringify({
        query: `{
                characters {
                    results {
                        name
                        status
                        gender
                        origin
                        location
                        image
                        }
                    }
            }`,
      }),
    })
      .then((response) => response.json())
      .then((data) => setData(data));

    console.log(data);
  }, []);

  return (
    <div>
      <h1>Request</h1>
    </div>
  );
}
