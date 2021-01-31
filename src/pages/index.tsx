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

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Social Good</title>
        <link rel="icon" />
      </Head>
      <Grid h="100vh" templateRows="auto 10px 1fr 10px auto" p="20px">
        <Flex justify="space-between">
          <Avatar src="/images/logo.png"/>
          <Heading>De Boca en Boca</Heading>
          <Button colorScheme="blue" as={Link} href="/login">
            Entrar
          </Button>
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
            <MenuCard label="Prevención" onClick={() => router.push("/prevention")} />
            <MenuCard label="Cultura Legal" />
          </Stack>
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
