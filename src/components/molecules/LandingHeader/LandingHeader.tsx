import React from "react";
import Image from "next/image";
import { HStack, Stack } from "@chakra-ui/react";

import NavItem from "components/atoms/NavItem/NavItem";
import { Link } from "components/atoms/Link";
import ButtonAction from "components/atoms/ButtonAction/ButtonAction";

const LandingHeader = () => {
  return (
    <Stack
      as="header"
      justify="space-between"
      p="2rem 3rem"
      align="center"
      bgColor="social.darkPurple"
      direction={["column", "row"]}
      spacing="2rem"
      zIndex="10"
    >
      <Link>
        <Image
          src="/images/logo.png"
          alt="logo"
          quality={100}
          width={154}
          height={93}
        />
      </Link>
      <HStack
        as="nav"
        w={{ base: "250px", md: "300px" }}
        justify="space-between"
      >
        <NavItem text="Inicio" />
        <NavItem text="Juegos" />
        <NavItem text="Acerca" />
      </HStack>
      <ButtonAction>Iniciar Sesión</ButtonAction>
    </Stack>
  );
};

export default LandingHeader;
