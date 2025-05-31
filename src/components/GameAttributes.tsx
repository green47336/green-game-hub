import Game from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  console.log(game.platforms);
  return (
    <SimpleGrid columns={2} as="dl">
      {!!game.platforms?.length && (
        <DefinitionItem term="Platforms">
          {game.platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
      )}

      {!!game.genres.length && (
        <DefinitionItem term="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
      )}
      {!!game.developers.length && (
        <DefinitionItem term="Developers">
          {game.developers.map((developer) => (
            <Text key={developer.id}>{developer.name}</Text>
          ))}
        </DefinitionItem>
      )}
      {game.creators && (
        <DefinitionItem term="Creators">
          {game.creators?.map((creator) => (
            <Text key={creator.id}>{creator.name}</Text>
          ))}
        </DefinitionItem>
      )}
      {!!game.publishers.length && (
        <DefinitionItem term="Publishers">
          {game.publishers?.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
      )}
      {game.metacritic && (
        <DefinitionItem term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
      )}
    </SimpleGrid>
  );
};

export default GameAttributes;
