import { Image, ImageProps } from "@chakra-ui/react";

export const ClickableImage = ({ src, alt, ...restOfProps }: ImageProps) => {
  return (
    <Image
      boxSize="150px"
      objectFit="cover"
      borderRadius="full"
      src={src}
      alt={alt}
      fallbackSrc="https://via.placeholder.com/150"
      _hover={{
        cursor: "pointer",
        borderStyle: "solid",
        borderWidth: "5px",
      }}
      {...restOfProps}
    />
  );
};
