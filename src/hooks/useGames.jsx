import { useState, useEffect } from "react";

function useGames() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  function fetchData() {
    const apiKey = "e2948cfac9e64a5ba426e4d3a233587c"; // Replace with your actual API key
    const url = `https://api.rawg.io/api/games?key=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
      })
      .catch((error) => {
        setError(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return { games, error };
}

export default useGames;
