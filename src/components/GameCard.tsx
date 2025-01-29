import { Game } from "@/hooks/useGames";
import { Card, Flex, HStack, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import { Tag } from "./ui/tag";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  console.log(game);
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between">
          <Flex wrap={"wrap"}>
            {game.parent_platforms.map((p) => (
              <Tag key={p.platform.id} size={"sm"}>
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
