import { Button, Heading, HStack, List, Stack } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./ui/skeleton";

const GenreListSkeleton = () => {
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <Button
        onClick={() => {}}
        fontSize="sm"
        size="xl"
        variant="outline"
        width="156px"
        textWrap={"wrap"}
        marginBottom={1}
      >
        All Genres
      </Button>
      <Stack>
        {Array.from({ length: 19 }).map((_, i) => (
          <HStack key={i}>
            <Skeleton boxSize="48px" borderRadius={8} objectFit="cover" />
            <SkeletonText noOfLines={2} width={95} />
          </HStack>
        ))}
      </Stack>
    </>
  );
};

export default GenreListSkeleton;
