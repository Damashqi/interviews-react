
import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then(res => res.json())
      .then(data => {
        const titles = data.results.map(f => f.title.toUpperCase());
        setMovies(titles);
      });
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <ul>
        {movies.map(m => <li key={m}>{m}</li>)}
      </ul>
    </div>
  );
}
