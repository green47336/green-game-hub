import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import { ColorModeButton } from "./ui/color-mode";
import { Link } from "react-router";
import AboutDrawer from "./AboutDrawer";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        <Image
          src={logo}
          boxSize="60px"
          minWidth="60px"
          minHeight="60px"
          borderRadius={5}
          _hover={{
            cursor: "pointer",
            transform: "scale(1.05)",
            color: "white",
          }}
          transition="all 0.2s ease-in-out"
        />
      </Link>
      <SearchInput />
      <AboutDrawer />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
