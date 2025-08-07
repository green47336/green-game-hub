import useGenres from "@/hooks/useGenres";
import useGameQueryStore from "@/store";
import {
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Image,
  List,
} from "@chakra-ui/react";
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
        borderRadius={5}
        paddingX={4}
        paddingY={3}
        marginBottom={3}
        width="fit"
        maxWidth="280px"
        marginX="auto"
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
        fontWeight={selectedGenreId === undefined ? "bold" : "normal"}
        width="100%"
        maxWidth="280px"
        textWrap={"wrap"}
        marginBottom={1}
        bg="gray.900"
        color="white"
        justifyContent="flex-start"
        paddingX={3}
        paddingY={2}
        _hover={{
          cursor: "pointer",
          transform: "scale(1.05)",
        }}
        transition="all 0.2s ease-in-out"
      >
        <HStack gap={3} width="100%">
          <Box
            boxSize="32px"
            borderRadius={5}
            bg="gray.700"
            flexShrink={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <span style={{ fontSize: "20px", color: "white" }}>☰</span>
          </Box>
          <span>All Genres</span>
        </HStack>
      </Button>
      <List.Root variant="plain">
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY={1}>
            <Button
              onClick={() => setSelectedGenreId(genre.id)}
              fontSize="sm"
              size="xl"
              variant="outline"
              fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
              width="100%"
              maxWidth="280px"
              textWrap={"wrap"}
              bg="gray.900"
              color="white"
              justifyContent="flex-start"
              paddingX={3}
              paddingY={2}
              _hover={{
                cursor: "pointer",
                transform: "scale(1.05)",
              }}
              transition="all 0.2s ease-in-out"
            >
              <HStack gap={3} width="100%">
                <Image
                  boxSize="32px"
                  borderRadius={5}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                  flexShrink={0}
                />
                <span>{genre.name}</span>
              </HStack>
            </Button>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
