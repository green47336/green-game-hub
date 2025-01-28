import { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root borderRadius={10} overflow="hidden">
        <Card.Body />
        <Card.Header fontSize="2xl">{game.name}</Card.Header>
        <Image src={game.background_image} />
      </Card.Root>
    </>
  );
};

export default GameCard;
