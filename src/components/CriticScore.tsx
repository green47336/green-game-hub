import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 89 ? "green" : score > 69 ? "yellow" : "";

  return (
    <Badge colorPalette={color} fontSize="14px" paddingX={2} borderRadius={1}>
      {score}
    </Badge>
  );
};

export default CriticScore;
