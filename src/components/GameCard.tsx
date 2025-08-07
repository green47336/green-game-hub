import Game from "@/entities/Game";
import useGameQueryStore from "@/store";
import { Card, Flex, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import { Tag } from "./ui/tag";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  return (
    <Card.Root bg="gray.900" _dark={{ bg: "gray.900" }}>
      <Link to={"/games/" + game.slug}>
        <Image
          borderRadius={5}
          src={getCroppedImageUrl(game.background_image)}
        />
      </Link>
      <Card.Body>
        <HStack justifyContent="space-between">
          <Flex wrap={"wrap"} gap={1}>
            {game.platforms?.map((p) => (
              <Tag
                onClick={() => setSelectedPlatformId(p.platform.id)}
                key={p.platform.id}
                size={"sm"}
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.05)",
                  color: "white",
                  shadow: "md",
                }}
                transition="all 0.2s ease-in-out"
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
