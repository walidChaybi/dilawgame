import useGames from "../../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard";
import GameSkeleton from "../GameSkeleton/GameSkeleton";

function GameGrid({
  selectedGenre,
  selectedPlatform,
  selectedOrder,
  searchText,
}) {
  const { games, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    selectedOrder,
    searchText
  );

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      padding={15}
      marginY={15}
      columns={{ sm: 1, md: 2, lg: 3 }}
      spacing={10}
    >
      {games.map((game) =>
        !isLoading ? (
          <GameCard key={game.id} game={game} />
        ) : (
          <GameSkeleton key={game.id} />
        )
      )}
    </SimpleGrid>
  );
}

export default GameGrid;
