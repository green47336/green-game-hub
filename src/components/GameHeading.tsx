import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Card, Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Card.Root
      bg="gray.900"
      padding={4}
      marginY={5}
      width="fit-content"
      marginX="auto"
    >
      <Heading
        as="h1"
        fontSize="5xl"
        fontWeight="extrabold"
        textAlign="center"
        letterSpacing="tight"
        lineHeight="shorter"
        textShadow="2px 2px 4px rgba(0,0,0,0.2)"
        color="white"
      >
        {heading}
      </Heading>
    </Card.Root>
  );
};

export default GameHeading;
