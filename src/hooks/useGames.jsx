import { useState, useEffect } from "react";
import axios from "axios";

function useGames({ selectedGenre }) {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  function fetchData() {
    const apiKey = "e2948cfac9e64a5ba426e4d3a233587c"; // Replace with your actual API key
    let url = `https://api.rawg.io/api/games?key=e2948cfac9e64a5ba426e4d3a233587c&genres=${selectedGenre}`;

    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
        setLoading(false);
        console.log(data.results);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, [selectedGenre]);

  return { games, error, isLoading };
}

export default useGames;
