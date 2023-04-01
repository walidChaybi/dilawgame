import { List, ListItem, Button, Image, HStack } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useGenres from "../../hooks/useGenres";

function Genre({ onSelectGenre, selectedGenre }) {
  const { genres, error, isLoading } = useGenres();

  useEffect(() => {}, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      <List spacing={5}>
        {genres.map((genre) => (
          <HStack
            borderRadius={20}
            bg={selectedGenre === genre && "purple.800"}
            key={genre.id}
          >
            <Image
              boxSize="40px"
              borderRadius="full"
              src={genre.image_background}
              objectFit="cover"
            />
            <ListItem>
              <Button
                color={selectedGenre === genre && "yellow.500"}
                fontWeight={selectedGenre === genre && "bold"}
                onClick={() => {
                  onSelectGenre(genre);
                }}
                variant="link"
              >
                {genre.name}
              </Button>
            </ListItem>
          </HStack>
        ))}
      </List>
    </>
  );
}

export default Genre;
