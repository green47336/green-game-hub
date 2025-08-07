import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import { Link } from "react-router";
import AboutDrawer from "./AboutDrawer";
import { backgroundColorCycle } from "@/constants/animations";

const NavBar = () => {
  return (
    <HStack
      justifyContent="space-between"
      padding="10px"
      css={{
        animation: `${backgroundColorCycle} 20s ease-in-out infinite`,
      }}
    >
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
    </HStack>
  );
};

export default NavBar;
