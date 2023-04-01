import { Text, Button, Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import GameGrid from "./components/GameGrid/GameGrid";
import Genre from "./components/Genre/Genre";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import SortSelector from "./components/SortSelector/SortSelector";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchText, setSearchText] = useState("");
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
        <Navbar onSearch={(searchText) => setSearchText(searchText)} />
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
          <Genre
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Text padding={15} fontWeight="900" fontSize={45}>
          {selectedGenre?.name} {selectedPlatform?.name} Games
        </Text>
        <HStack paddingLeft={15}>
          <PlatformSelector
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          />
          <SortSelector
            onSelectSortOrder={(order) => setSelectedOrder(order)}
            selectedOrder={selectedOrder}
          />
        </HStack>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          selectedOrder={selectedOrder}
          searchText={searchText}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
