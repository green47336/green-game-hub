import { Game } from "@/hooks/useGames";
import { Platform } from "@/hooks/usePlatforms";
import { Card, Flex, HStack, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import { Tag } from "./ui/tag";

interface Props {
  game: Game;
  onSelectPlatform: (platform: Platform) => void;
}

const GameCard = ({ game, onSelectPlatform }: Props) => {
  return (
    <Card.Root>
      <Image borderRadius={5} src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between">
          <Flex wrap={"wrap"} gap={1}>
            {game.platforms.map((p) => (
              <Tag
                onClick={() => onSelectPlatform(p.platform)}
                key={p.platform.id}
                size={"sm"}
              >
                {p.platform.name}
              </Tag>
            ))}
          </Flex>
          {game.metacritic && <CriticScore score={game.metacritic} />}
        </HStack>
      </Card.Body>
      <Card.Header
        fontSize="2xl"
        fontWeight="bold"
        alignSelf={"center"}
        paddingBottom={5}
        paddingTop={0}
      >
        {game.name}
      </Card.Header>
    </Card.Root>
  );
};

export default GameCard;
