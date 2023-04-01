import useGames from "../../hooks/useGames";
import axios from "axios";
import { useState, useEffect } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard";
import GameSkeleton from "../GameSkeleton/GameSkeleton";
function GameGrid({ selectedGenre }) {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  function fetchData(selectedGenre) {
    // https://api.rawg.io/api/games?key=e2948cfac9e64a5ba426e4d3a233587c
    let url =
      "https://api.rawg.io/api/games?key=e2948cfac9e64a5ba426e4d3a233587c";
    if (selectedGenre) {
      url = `https://api.rawg.io/api/games?key=e2948cfac9e64a5ba426e4d3a233587c&genres=${selectedGenre.slug}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData(selectedGenre);
  }, [selectedGenre]);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid padding="15px" columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {games.map((game) =>
          !isLoading ? (
            <GameCard key={game.id} game={game} />
          ) : (
            <GameSkeleton key={game.id} />
          )
        )}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
