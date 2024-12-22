import { useEffect, useState } from "react";

function ApiJokes() {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getJokes() {
      const url = "https://v2.jokeapi.dev/joke/Any";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setJoke(data.category);
      } catch (error) {
        setError(error.message); // Set the error message
      }
    }
    getJokes();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <p>This is a joke:</p>
          <p>{joke || "Loading..."}</p>
        </div>
      )}
    </div>
  );
}

export default ApiJokes;
