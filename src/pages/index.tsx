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
import { MenuCard } from "../../components/molecules/MenuCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Social Good</title>
        <link rel="icon" />
      </Head>
      <Grid h="100vh" templateRows="auto 10px 1fr 10px auto" p="20px">
        <Flex justify="space-between">
          <Avatar />
          <Heading>De Boca en Boca</Heading>
          <Button colorScheme="blue">Entrar</Button>
        </Flex>
        <Spacer />
        <Stack
          direction="row"
          spacing="40px"
          justify="center"
          align="center"
          wrap="wrap"
        >
          <MenuCard label="Prevención" />
          <MenuCard label="Cultura Legal" />
        </Stack>
        <Spacer />
        <Grid placeItems="center">
          <Button colorScheme="green" w="fit-content">
            Acerca del programa
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
