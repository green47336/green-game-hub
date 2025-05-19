import useGames from "@/hooks/useGames";
import { Platform } from "@/hooks/usePlatforms";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";

interface Props {
  gameQuery: GameQuery;
  onSelectPlatform: (platform: Platform | null) => void;
}

const GameGrid = ({ gameQuery, onSelectPlatform }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = Array.from({ length: 20 });

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="15px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={2}>
        {isLoading &&
          skeletons.map((_, index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} onSelectPlatform={onSelectPlatform} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          marginY={5}
          width="100%"
          variant="outline"
        >
          {isFetchingNextPage ? "Comin' Right Up..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
