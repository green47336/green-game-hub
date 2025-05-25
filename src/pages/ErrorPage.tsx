import NavBar from "@/components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Uh oh.</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "There's nothing here..."
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
