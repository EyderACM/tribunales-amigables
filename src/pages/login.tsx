import {
  Heading,
  Grid,
  Spacer,
  Flex,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";
import { Input } from "../components/atoms/Input";
import { Link } from "../components/atoms/Link";

const Login = () => {
  return (
    <Grid
      h="100vh"
      templateRows="auto 40px 1fr"
      p="20px"
      pt="40px"
      alignItems="center"
    >
      <Heading>Iniciar Sesión</Heading>
      <Spacer />
      <form action="">
        <Image
          src="/images/happy-cat.svg"
          boxSize="100px"
          objectFit="contain"
          transform="translateY(10px)"
        />
        <Grid
          templateRows="auto 20px auto"
          bg="gray.300"
          h="fit-content"
          maxWidth="500px"
          p="20px"
        >
          <Stack spacing="15px" p="10px 40px">
            <Input placeholder="Correo" />
            <Input placeholder="Contraseña" />
          </Stack>
          <Spacer />
          <Flex justify="space-between" align="center">
            <Link textAlign="left">¿Olvidaste tu contraseña?</Link>
            <Grid templateColumns="auto 10px 1fr">
              <Link href="/register" h="fit-content" alignSelf="center">
                Regístrate
              </Link>
              <Spacer />
              <Button colorScheme="green" type="submit">
                Entrar
              </Button>
            </Grid>
          </Flex>
        </Grid>
      </form>
    </Grid>
  );
};

export default Login;
