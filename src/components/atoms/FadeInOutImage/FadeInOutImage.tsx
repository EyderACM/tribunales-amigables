import { Center, ScaleFade, Image, ScaleFadeProps } from "@chakra-ui/react";

export interface IFadeInOutImage extends ScaleFadeProps {
  src: string;
  show: boolean;
}

export const FadeInOutImage = ({
  src,
  show,
  ...restOfProps
}: IFadeInOutImage) => {
  return (
    <Center
      w="100%"
      h="100vh"
      position="absolute"
      zIndex={5}
      top="0px"
      display={show ? "grid" : "none"}
    >
      <ScaleFade initialScale={0.9} in={show} {...restOfProps}>
        <Image src={src} boxSize="70%" />
      </ScaleFade>
    </Center>
  );
};
