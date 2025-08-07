import { Box, Button, Card, Heading, HStack, Stack } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./ui/skeleton";

const GenreListSkeleton = () => {
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
        fontSize="sm"
        size="xl"
        variant="outline"
        width="100%"
        maxWidth="280px"
        textWrap={"wrap"}
        marginBottom={1}
        bg="gray.900"
        color="white"
        justifyContent="flex-start"
        paddingX={3}
        paddingY={2}
        _hover={{}}
        transition="all 0.2s ease-in-out"
        disabled
      >
        <HStack gap={3} width="100%">
          <Box boxSize="32px" borderRadius={5} bg="gray.700" flexShrink={0} />
          <SkeletonText noOfLines={1} width={80} />
        </HStack>
      </Button>
      <Stack>
        {Array.from({ length: 10 }).map((_, i) => (
          <Button
            key={i}
            fontSize="sm"
            size="xl"
            variant="outline"
            width="100%"
            maxWidth="280px"
            textWrap={"wrap"}
            marginBottom={1}
            bg="gray.900"
            color="white"
            justifyContent="flex-start"
            paddingX={3}
            paddingY={2}
            _hover={{}}
            transition="all 0.2s ease-in-out"
            disabled
          >
            <HStack gap={3} width="100%">
              <Skeleton boxSize="32px" borderRadius={5} />
              <SkeletonText noOfLines={1} width={80} />
            </HStack>
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default GenreListSkeleton;
