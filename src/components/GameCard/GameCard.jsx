import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";

function GameCard({ game }) {
  return (
    <Card borderRadius="15px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
