import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
function useGenres() {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/genres")
      .then(({ data }) => {
        setGenres(data.results);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return { genres, error, isLoading };
}

export default useGenres;
