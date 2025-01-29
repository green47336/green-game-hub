import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "All Platforms"} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem onClick={() => onSelectPlatform(null)} value="">
          All Platforms
        </MenuItem>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            value={platform.name}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
