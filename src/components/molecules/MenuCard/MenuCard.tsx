import { Button, Stack, Image } from "@chakra-ui/react";
import { ButtonProps } from "@chakra-ui/react";
import { MenuCardImage, IMenuCardImage } from "../../atoms/MenuCard";

export interface IMenuCard extends ButtonProps, IMenuCardImage {}

export const MenuCard = ({ label, imageSrc, ...buttonProps }: IMenuCard) => {
  return (
    <Stack width="fit-content" spacing="15px" maxWidth="150px" height="100%">
      <MenuCardImage label={label} imageSrc={imageSrc} />
      <Button
        colorScheme="blue"
        whiteSpace="normal"
        height="100%"
        pt="0.5rem"
        pb="0.5rem"
        {...buttonProps}
      >
        {label}
      </Button>
    </Stack>
  );
};
