import useScreenshots from "@/hooks/useScreenshots";
import { SimpleGrid } from "@chakra-ui/react";
import ScreenshotDisplay from "./ScreenshotDisplay";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
      {data?.results.map((file) => (
        <ScreenshotDisplay key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
