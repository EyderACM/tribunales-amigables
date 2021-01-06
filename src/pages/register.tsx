import { Heading } from "@chakra-ui/react";
import { Link } from "../components/atoms/Link";

const Register = () => {
  return (
    <>
      <Heading>Register</Heading>
      <Link href="/login">¿Ya tienes una cuenta? inicia sesión :)</Link>
    </>
  );
};

export default Register;
