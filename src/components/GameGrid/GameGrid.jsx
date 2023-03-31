import useGames from "../../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard";
import GameSkeleton from "../GameSkeleton/GameSkeleton";
function GameGrid() {
  const { games, error, isLoading } = useGames();
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
