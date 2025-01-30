import useGenres, { Genre } from "@/hooks/useGenres";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <Button
        onClick={() => onSelectGenre(null)}
        fontSize="sm"
        size="xl"
        variant="outline"
        width="156px"
        textWrap={"wrap"}
        marginBottom={1}
      >
        All Genres
      </Button>
      <List.Root variant="plain">
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY={1}>
            <HStack>
              <Image
                boxSize="48px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="sm"
                size="xl"
                variant="outline"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                width={100}
                textWrap={"wrap"}
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
