import { Badge } from "@chakra-ui/react";

function CriticScore({ game }) {
  const score = game.metacritic;
  let color = score > 75 ? "green" : "red";
  return (
    <>
      <Badge colorScheme={color} borderRadius="5px" paddingX={2} paddingY={1}>
        {game.metacritic}
      </Badge>
    </>
  );
}

export default CriticScore;
