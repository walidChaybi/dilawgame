import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import PlatformIconList from "../PlatformIconList/PlatformIconList";
import CriticScore from "../CriticScore/CriticScore";

function GameCard({ game }) {
  return (
    <Card borderRadius="15px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList game={game} />
          <CriticScore game={game} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
