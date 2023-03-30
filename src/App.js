import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">aside</GridItem>
      </Show>
      <GridItem bg="green" area="main">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
