import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HStack, Stack } from "@chakra-ui/react";

import NavItem from "components/atoms/NavItem/NavItem";
import { Link } from "components/atoms/Link";
import ButtonAction from "components/atoms/ButtonAction/ButtonAction";
import useUserAuth from "hooks/useUserAuth/useUserAuth";

const LandingHeader = () => {
  const [userToken, setUserToken] = useUserAuth();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(undefined);

  useEffect(() => {
    if (userToken) {
      setUserIsLoggedIn(true);
    } else {
      setUserIsLoggedIn(false);
    }
  }, [userToken]);

  const logoutUser = () => {
    setUserToken({ token: "" });
  };

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
      <Link href="/">
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
        <Link href="/">
          <NavItem text="Inicio" imgSrc="/images/houseIcon.png" />
        </Link>
        <Link href="/#games">
          <NavItem text="Juegos" imgSrc="/images/controllerIcon.png" />
        </Link>
        <Link href="/#info">
          <NavItem text="Info" imgSrc="/images/infoIcon.png" />
        </Link>
      </HStack>
      {userIsLoggedIn ? (
        <ButtonAction colorScheme="red" as={Link} onClick={logoutUser}>
          Cerrar Sesión
        </ButtonAction>
      ) : (
        <Link href="/login" textDecoration="none !important">
          <ButtonAction>Iniciar Sesión</ButtonAction>
        </Link>
      )}
    </Stack>
  );
};

export default LandingHeader;
