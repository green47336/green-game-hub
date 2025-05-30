import {
  Button,
  CloseButton,
  Drawer,
  Portal,
  Avatar,
  Stack,
  HStack,
} from "@chakra-ui/react";

const AboutDrawer = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          About
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>About</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <>
                <Stack>
                  <p>
                    This app uses the{" "}
                    <a
                      href="https://api.rawg.io/docs/"
                      style={{ fontWeight: "bold" }}
                    >
                      RAWG Video Games Database API
                    </a>{" "}
                    for all game data including media.
                  </p>
                  <hr
                    style={{
                      height: "2px",
                      margin: "10px",
                    }}
                  />
                  <HStack>
                    <Avatar.Root size="2xl">
                      <Avatar.Fallback name="Alex Green" />
                      <a href="https://www.linkedin.com/in/richard-alex-green/">
                        <Avatar.Image src="https://media.licdn.com/dms/image/v2/D4E03AQFegyq56WXVeA/profile-displayphoto-shrink_800_800/B4EZag8xrEHMAc-/0/1746457009254?e=1753920000&v=beta&t=T9yl30Emv03qVwLZmob6WrBkbaqbi1xvcihJtPyqmRk" />
                      </a>
                    </Avatar.Root>
                    <p>
                      Green Game Hub is a project by{" "}
                      <a
                        href="https://www.linkedin.com/in/richard-alex-green/"
                        style={{ fontWeight: "bold" }}
                      >
                        Alex Green
                      </a>
                      . Check out the{" "}
                      <a
                        href="https://github.com/green47336/game-hub"
                        style={{ fontWeight: "bold" }}
                      >
                        GitHub
                      </a>{" "}
                      page to learn more!
                    </p>
                  </HStack>
                </Stack>
              </>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default AboutDrawer;
