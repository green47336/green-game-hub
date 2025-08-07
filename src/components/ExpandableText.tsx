import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        variant="outline"
        onClick={() => setExpanded(!expanded)}
        bg="gray.900"
        color="white"
        _dark={{ bg: "gray.900", color: "white" }}
        _hover={{
          cursor: "pointer",
          transform: "scale(1.05)",
        }}
        transition="all 0.2s ease-in-out"
      >
        {expanded ? "Show Less " : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
