import useGenres from "@/hooks/useGenres";
import useGameQueryStore from "@/store";
import { Button, Heading, HStack, Image, List } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <GenreListSkeleton />;

  return (
    <>
      <Heading
        fontSize="2xl"
        marginBottom={3}
        fontWeight="extrabold"
        textAlign="center"
        letterSpacing="tight"
        lineHeight="shorter"
      >
        Genres
      </Heading>
      <Button
        onClick={() => setSelectedGenreId(undefined)}
        fontSize="sm"
        size="xl"
        variant="outline"
        width="156px"
        textWrap={"wrap"}
        marginBottom={1}
        _hover={{
          cursor: "pointer",
          transform: "scale(1.05)",
          color: "white",
        }}
        transition="all 0.2s ease-in-out"
      >
        All Genres
      </Button>
      <List.Root variant="plain">
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY={1}>
            <HStack>
              <Image
                boxSize="48px"
                borderRadius={5}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="sm"
                size="xl"
                variant="outline"
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                width={100}
                textWrap={"wrap"}
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.05)",
                  color: "white",
                }}
                transition="all 0.2s ease-in-out"
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
