import { useRouter } from 'next/router'
import Head from "next/head";
import {
  Grid,
  Flex,
  Stack,
  Heading,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { MenuCard } from "../components/molecules/MenuCard";
import useProtectedRoute from 'hooks/useProtectedRoute/useProtectedRoute';

function Prevention() {
  useProtectedRoute();
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Social Good</title>
        <link rel="icon" />
      </Head>
      <Grid h="100vh" templateRows="auto 10px 1fr 10px auto" p="20px">
        <Flex justify="center">
          <Heading>Prevención</Heading>
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
              label="Secretos"
              onClick={() => router.push("/games/secrets")}
              imageSrc="/images/secretos.png"
            />
            <MenuCard label="Partes del Cuerpo" imageSrc="/images/partes_del_cuerpo.png"/>
            <MenuCard label="Personas de Confianza" imageSrc="/images/personas_de_confianza.png"/>
          </Stack>
        </Stack>
        <Spacer />
        <Grid placeItems="center">
          <Button colorScheme="green" w="fit-content" onClick={() => router.push("/")}>
            Regresar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Prevention;