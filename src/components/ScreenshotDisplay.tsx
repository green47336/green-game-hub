import { Dialog, Portal, CloseButton, Image } from "@chakra-ui/react";

interface Props {
  src: string;
}

const ScreenshotDisplay = ({ src }: Props) => {
  return (
    <Dialog.Root size="lg" placement="center" motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        <Image src={src} />
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Body padding={0}>
              <Image src={src} />
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
