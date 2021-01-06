import { FC } from "react";
import { Button, Stack, Image } from "@chakra-ui/react";
import { MenuCardProps } from "./MenuCardProps";

export const MenuCard: FC<MenuCardProps> = ({
  label,
  imageSrc,
  ...buttonProps
}) => {
  return (
    <Stack width="fit-content" spacing="15px" maxWidth="150px">
      <Image
        boxSize="150px"
        objectFit="cover"
        borderRadius="full"
        src={imageSrc}
        alt={label}
        fallbackSrc="https://via.placeholder.com/150"
      />
      <Button
        colorScheme="blue"
        whiteSpace="normal"
        height="auto"
        pt="0.5rem"
        pb="0.5rem"
        {...buttonProps}
      >
        {label}
      </Button>
    </Stack>
  );
};
