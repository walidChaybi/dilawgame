import {
  Skeleton,
  Card,
  CardBody,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";
import React from "react";

function GameSkeleton() {
  return (
    <Card>
      <Skeleton height={{ md: "350px", sm: "40vh", lg: "250px" }} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameSkeleton;
