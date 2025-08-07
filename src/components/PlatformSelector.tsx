import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          bg="gray.900"
          color="white"
          _dark={{ bg: "gray.900", color: "white" }}
          _hover={{
            cursor: "pointer",
          }}
          transition="all 0.2s ease-in-out"
        >
          {selectedPlatform?.name || "All Platforms"} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem
          onClick={() => setSelectedPlatformId(undefined)}
          value="All Platforms"
        >
          All Platforms
        </MenuItem>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
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
