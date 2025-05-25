import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={5}
      _hover={{
        boxShadow: "lg",
        transform: "scale(1.01)",
        transition: "all 0.2s",
        zIndex: 1,
      }}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
