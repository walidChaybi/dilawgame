import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import GameGrid from "./components/GameGrid/GameGrid";
import Genre from "./components/Genre/Genre";
import { useState } from "react";
function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem padding={5} area="aside">
          <Button
            marginY={5}
            variant="link"
            onClick={() => {
              setSelectedGenre(null);
            }}
          >
            All
          </Button>
          <Genre onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
