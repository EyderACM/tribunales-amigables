import NextLink from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { FC } from "react";

export const Link: FC<ChakraLinkProps> = ({
  children,
  href,
  ...restOfProps
}) => {
  return (
    <NextLink href={href ? href : "#"} passHref>
      <ChakraLink {...restOfProps}>{children}</ChakraLink>
    </NextLink>
  );
};
