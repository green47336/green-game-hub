import useTrailers from "@/hooks/useTrailers";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const firstResult = data?.results[0];
  return firstResult ? (
    <video src={firstResult.data[480]} poster={firstResult.preview} controls />
  ) : null;
};

export default GameTrailer;
