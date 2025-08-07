import useGenres from "@/hooks/useGenres";
import useGameQueryStore from "@/store";
import { Button, Card, Heading, HStack, Image, List } from "@chakra-ui/react";
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
      <Card.Root
        bg="gray.900"
        _dark={{ bg: "gray.900" }}
        padding={4}
        marginBottom={3}
      >
        <Heading
          fontSize="2xl"
          fontWeight="extrabold"
          textAlign="center"
          letterSpacing="tight"
          lineHeight="shorter"
          color="white"
        >
          Genres
        </Heading>
      </Card.Root>
      <Button
        onClick={() => setSelectedGenreId(undefined)}
        fontSize="sm"
        size="xl"
        variant="outline"
        width="156px"
        textWrap={"wrap"}
        marginBottom={1}
        bg="gray.900"
        color="white"
        _dark={{ bg: "gray.900", color: "white" }}
        _hover={{
          cursor: "pointer",
          transform: "scale(1.05)",
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
                bg="gray.900"
                color="white"
                _dark={{ bg: "gray.900", color: "white" }}
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.05)",
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
