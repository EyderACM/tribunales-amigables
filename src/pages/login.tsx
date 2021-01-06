import { Heading } from "@chakra-ui/react";
import { Link } from "../components/atoms/Link";

const Login = () => {
  return (
    <>
      <Heading>Login</Heading>
      <Link href="/register">¿No tienes una cuenta? registrate :)</Link>
    </>
  );
};

export default Login;
