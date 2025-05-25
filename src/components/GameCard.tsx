import { Game } from "@/hooks/useGames";
import useGameQueryStore from "@/store";
import { Card, Flex, HStack, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import { Tag } from "./ui/tag";
import { Link } from "react-router";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  return (
    <Card.Root>
      <Image borderRadius={5} src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between">
          <Flex wrap={"wrap"} gap={1}>
            {game.platforms.map((p) => (
              <Tag
                onClick={() => setSelectedPlatformId(p.platform.id)}
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
        <Link to={"/games/" + game.slug}>{game.name}</Link>
      </Card.Header>
    </Card.Root>
  );
};

export default GameCard;
