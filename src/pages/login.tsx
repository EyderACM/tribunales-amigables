import { Heading } from "@chakra-ui/react";
import { Link } from "../components/atoms/Link";

const Login = () => {
  return (
    <>
      <Heading>Inicio de Sesión</Heading>
      <Link href="/register">¿No tienes una cuenta? regístrate :)</Link>
    </>
  );
};

export default Login;
