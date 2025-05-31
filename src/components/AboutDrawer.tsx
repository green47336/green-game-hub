import {
  Avatar,
  Button,
  CloseButton,
  Drawer,
  HStack,
  Link,
  Portal,
  Separator,
  Stack,
} from "@chakra-ui/react";

import { useRef } from "react";

import { LuExternalLink } from "react-icons/lu";

const AboutDrawer = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Drawer.Root initialFocusEl={() => ref.current}>
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
                    <Link href="https://api.rawg.io/docs/" variant="underline">
                      RAWG Video Games Database API <LuExternalLink />
                    </Link>{" "}
                    for all game data including media.
                  </p>
                  <Separator />
                  <HStack>
                    <Avatar.Root size="2xl">
                      <Avatar.Fallback name="Alex Green" />
                      <a href="https://www.linkedin.com/in/richard-alex-green/">
                        <Avatar.Image src="https://media.licdn.com/dms/image/v2/D4E03AQFegyq56WXVeA/profile-displayphoto-shrink_800_800/B4EZag8xrEHMAc-/0/1746457009254?e=1753920000&v=beta&t=T9yl30Emv03qVwLZmob6WrBkbaqbi1xvcihJtPyqmRk" />
                      </a>
                    </Avatar.Root>
                    <p>
                      Green Game Hub is a project by{" "}
                      <Link
                        href="https://www.linkedin.com/in/richard-alex-green/"
                        variant="underline"
                      >
                        Alex Green <LuExternalLink />
                      </Link>
                      . Check out the{" "}
                      <Link
                        href="https://github.com/green47336/game-hub"
                        variant="underline"
                      >
                        GitHub <LuExternalLink />
                      </Link>{" "}
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
