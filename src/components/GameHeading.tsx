import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading
      as="h1"
      marginY={5}
      fontSize="5xl"
      fontWeight="extrabold"
      textAlign="center"
      letterSpacing="tight"
      lineHeight="shorter"
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
