import { Game } from "@/hooks/useGames";
import { Card, HStack, Image, SimpleGrid } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Tag } from "./ui/tag";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Header
        fontSize="2xl"
        fontWeight="bold"
        alignSelf={"center"}
        padding={0}
      >
        {game.name}
      </Card.Header>
      <Card.Body>
        {/* <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
            /> */}
        <HStack justifyContent="space-between">
          <SimpleGrid columns={2} gap="1px">
            {game.parent_platforms.map((p) => (
              <Tag key={p.platform.id} size={"sm"}>
                {p.platform.name}
              </Tag>
            ))}
          </SimpleGrid>
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
