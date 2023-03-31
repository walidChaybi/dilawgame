import { List, ListItem, Button, Image, HStack } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Genre({ onSelectGenre }) {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  function fetchData() {
    const apiKey = "e2948cfac9e64a5ba426e4d3a233587c"; // Replace with your actual API key
    const url = `https://api.rawg.io/api/genres?key=${apiKey}`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      <List spacing={5}>
        {genres.map((genre) => (
          <HStack key={genre.id}>
            <Image
              boxSize="40px"
              borderRadius="full"
              src={genre.image_background}
              objectFit="cover"
            />
            <ListItem>
              <Button
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
