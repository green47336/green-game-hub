import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { backgroundColorCycle } from "@/constants/animations";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box
        padding={5}
        minHeight="100vh"
        css={{
          animation: `${backgroundColorCycle} 20s ease-in-out infinite`,
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
