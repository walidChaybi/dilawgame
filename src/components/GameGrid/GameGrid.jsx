import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
function GameGrid() {
  console.log(process.env.REACT_APP_API_KEY);
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

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
