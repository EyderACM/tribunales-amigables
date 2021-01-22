import { Image } from "@chakra-ui/react";

export interface IMenuCardImage {
  label: string;
  imageSrc?: string;
}

export const MenuCardImage = ({ label, imageSrc }: IMenuCardImage) => {
  return (
    <Image
      boxSize="150px"
      objectFit="cover"
      borderRadius="full"
      src={imageSrc}
      alt={label}
      fallbackSrc="https://via.placeholder.com/150"
    />
  );
};
