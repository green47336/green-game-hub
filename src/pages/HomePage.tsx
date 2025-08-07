import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`, // 1024px
        }}
        templateColumns={{ base: "1fr", lg: "260px 1fr" }}
      >
        <GridItem
          area="aside"
          paddingX={5}
          display={{ base: "none", lg: "block" }}
        >
          <GenreList />
        </GridItem>
        <GridItem area="main">
          <Box paddingLeft={4}>
            <GameHeading />
            <Flex gap={2}>
              <PlatformSelector />
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
