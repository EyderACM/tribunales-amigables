import {
  Heading,
  Grid,
  Spacer,
  Stack,
  Button,
  Divider,
  Image,
} from "@chakra-ui/react";
import { Input } from "../components/atoms/Input";

const Register = () => {
  return (
    <Grid h="100vh" templateRows="auto 40px 1fr" p="20px" alignItems="center">
      <Heading>Regístrate</Heading>
      <Spacer />
      <form action="">
        <Image
          src="/images/happy-cat.svg"
          boxSize="100px"
          objectFit="contain"
          transform="translateY(9px)"
        />
        <Divider opacity={1} borderWidth="5px" borderColor="black" />
        <Stack spacing="15px" p="10px 40px" maxWidth="500px">
          <Input placeholder="Nombre" />
          <Input placeholder="Apellidos" />
          <Input placeholder="Estado" />
          <Input placeholder="Correo" />
          <Input placeholder="Contraseña" />
          <Button colorScheme="green" type="submit">
            Registrar
          </Button>
        </Stack>
      </form>
    </Grid>
  );
};

export default Register;
