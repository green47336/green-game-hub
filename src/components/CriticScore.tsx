import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 79 ? "green" : score > 59 ? "yellow" : "";

  return (
    <Badge colorPalette={color} fontSize="14px" paddingX={2} borderRadius={5}>
      {score}
    </Badge>
  );
};

export default CriticScore;
