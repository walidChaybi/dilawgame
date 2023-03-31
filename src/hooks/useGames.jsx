import { useState, useEffect } from "react";

function useGames() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  function fetchData() {
    const apiKey = "e2948cfac9e64a5ba426e4d3a233587c"; // Replace with your actual API key
    const url = `https://api.rawg.io/api/games?key=${apiKey}`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return { games, error, isLoading };
}

export default useGames;
