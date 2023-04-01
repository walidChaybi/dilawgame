import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

function useGames(selectedGenre) {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/games", { params: { genres: selectedGenre?.slug } })
      .then(({ data }) => {
        setGames(data.results);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        setError(err);
      });
  }, [selectedGenre]);

  return { games, error, isLoading };
}

export default useGames;
