import { Dialog, Portal, CloseButton, Image } from "@chakra-ui/react";

import { useRef } from "react";

interface Props {
  src: string;
}

const ScreenshotDisplay = ({ src }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Dialog.Root
      placement="center"
      motionPreset="slide-in-bottom"
      initialFocusEl={() => ref.current}
    >
      <Dialog.Trigger asChild>
        <Image src={src} cursor="pointer" />
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content margin={1}>
            <Dialog.Body padding={0}>
              <Image src={src} w={720} />
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="lg" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ScreenshotDisplay;
