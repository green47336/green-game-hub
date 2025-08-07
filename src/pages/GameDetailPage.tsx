import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameScreenshots from "@/components/GameScreenshots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import {
  Box,
  Card,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <GridItem
        w="100vw"
        h="60vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size="xl" />
      </GridItem>
    );

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} margin={5}>
      <GridItem>
        <Card.Root bg="gray.900" _dark={{ bg: "gray.900" }} padding={6}>
          <Heading
            size="4xl"
            fontWeight="extrabold"
            textAlign="center"
            letterSpacing="tight"
            lineHeight="shorter"
            marginBottom={4}
            color="white"
          >
            {game.name}
          </Heading>
          <Box color="white" marginBottom={4}>
            <ExpandableText>{game.description_raw}</ExpandableText>
          </Box>
          <GameAttributes game={game} />
        </Card.Root>
      </GridItem>
      <GridItem>
        <Card.Root bg="gray.900" _dark={{ bg: "gray.900" }} padding={6}>
          <Box
            padding={2}
            display="flex"
            justifyContent="center"
            marginBottom={4}
          >
            <GameTrailer gameId={game.id} />
          </Box>
          <GameScreenshots gameId={game.id} />
        </Card.Root>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
