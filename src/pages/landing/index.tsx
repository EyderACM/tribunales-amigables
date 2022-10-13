import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Grid,
  Flex,
  Stack,
  Avatar,
  Heading,
  Button,
  Spacer,
  Link,
} from "@chakra-ui/react";

import { motion, AnimatePresence } from "framer-motion";
import useUserAuth from "hooks/useUserAuth/useUserAuth";
import { MenuCard } from "components/molecules/MenuCard";

export default function Home() {
  const [userToken, setUserToken] = useUserAuth();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    if (userToken) {
      setUserIsLoggedIn(true);
    } else {
      setUserIsLoggedIn(false);
    }
  }, [userToken]);

  const logoutUser = () => {
    setUserToken({ token: undefined, isAdmin: false });
  };

  return (
    <div>
      <Head>
        <title>Social Good</title>
        <link rel="icon" />
      </Head>
      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Grid h="100vh" templateRows="auto 10px 1fr 10px auto" p="20px">
            <Flex justify="space-between">
              <Avatar src="/images/logo.png" />
              <Heading>De Boca en Boca</Heading>
              {userIsLoggedIn ? (
                <Button colorScheme="red" as={Link} onClick={logoutUser}>
                  Cerrar Sesión
                </Button>
              ) : (
                <Button colorScheme="blue" as={Link} href="/login">
                  Entrar
                </Button>
              )}
            </Flex>
            <Spacer />
            <Stack justify="center" align="center">
              <Stack
                direction="row"
                spacing="40px"
                justify="center"
                align="center"
                wrap="wrap"
              >
                <MenuCard
                  imageSrc="/images/prevencion.png"
                  label="Prevención"
                  onClick={() => router.push("/prevention")}
                />
                <MenuCard
                  imageSrc="/images/cultura_legal.png"
                  label="Cultura Legal"
                />
              </Stack>
            </Stack>
            <Spacer />
            <Grid placeItems="center">
              <Button colorScheme="green" w="fit-content">
                Acerca del programa
              </Button>
            </Grid>
          </Grid>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
