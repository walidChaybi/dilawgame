import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

function usePlatforms() {
  const [platforms, setPlatforms] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    apiClient
      .get("/platforms/lists/parents")
      .then(({ data }) => {
        setPlatforms(data.results);
        setTimeout(() => {}, 500);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return { platforms, error };
}

export default usePlatforms;
