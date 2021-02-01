import { useRouter } from 'next/router'
import Head from "next/head";
import {
  Grid,
  Flex,
  Stack,
  Avatar,
  Heading,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "../components/atoms/Link";
import { MenuCard } from "../components/molecules/MenuCard";
import { motion, AnimatePresence } from "framer-motion";
import useUserAuth from "hooks/useUserAuth/useUserAuth";
import { Else, If, Then } from "react-if";
import React from "react";

export default function Home() {
  const [userToken, setUserToken] = useUserAuth();
  const router = useRouter();

  const logoutUser = () => {
    setUserToken({ token: "" });
    router.push("/");
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
              <Avatar src="/images/logo.png"/>
              <Heading>De Boca en Boca</Heading>
              <If condition={userToken === "" || !!userToken}>
                <Then>
                  <Button colorScheme="red" as={Link} onClick={logoutUser}>
                    Cerrar Sesión
                  </Button>
                </Then>
                <Else>
                  <Button colorScheme="blue" as={Link} href="/login">
                    Entrar
                  </Button>
                </Else>
              </If>
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
                <MenuCard imageSrc="/images/cultura_legal.png" label="Cultura Legal" />
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
