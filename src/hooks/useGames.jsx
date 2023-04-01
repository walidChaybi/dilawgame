import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

function useGames(selectedGenre, selectedPlatform, selectedOrder, searchText) {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/games", {
        params: {
          genres: selectedGenre?.slug,
          platforms: selectedPlatform?.id,
          ordering: selectedOrder,
          search: searchText,
        },
      })
      .then(({ data }) => {
        setGames(data.results);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        setError(err);
      });
  }, [selectedGenre, selectedPlatform, selectedOrder, searchText]);

  return { games, error, isLoading };
}

export default useGames;
