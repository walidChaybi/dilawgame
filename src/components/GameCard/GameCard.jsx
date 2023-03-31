import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import PlatformIconList from "../PlatformIconList/PlatformIconList";

function GameCard({ game }) {
  return (
    <Card borderRadius="15px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList game={game} />
      </CardBody>
    </Card>
  );
}

export default GameCard;
