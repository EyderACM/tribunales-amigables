import {
  Heading,
  Grid,
  Spacer,
  Flex,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";
import useToast from "hooks/useToast/useToast";
import useUserAuth from "hooks/useUserAuth/useUserAuth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import userService from "services/userService/userService";
import { Input } from "../components/atoms/Input";
import { Link } from "../components/atoms/Link";

interface IRegisterInput {
  email: string;
  password: string;
}

interface IRegisterInput {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const { callAlertToast, callSuccessToast } = useToast();
  const [, setUserToken] = useUserAuth();
  const { register, handleSubmit, errors } = useForm<IRegisterInput>();

  const onSubmit = async (data: IRegisterInput) => {
    const { email, password } = data;
    const userFormData = { email, password };

    try {
      const data = await userService.logingUser({
        userFormData,
        remember: true,
      });
      setUserToken({ token: data["auth_token"] });
      callSuccessToast();
      router.push("/");
    } catch (error) {
      callAlertToast(
        "Error con el registro, ingresa correctamente los datos y asegúrate que el correo exista."
      );
    }
  };

  return (
    <Grid
      h="100vh"
      templateRows="auto 40px 1fr"
      p="20px"
      pt="40px"
      align="center"
    >
      <Heading>Iniciar Sesión</Heading>
      <Spacer />
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <Input
              name="email"
              placeholder="Correo"
              type="email"
              inputRef={register({ required: true })}
            />
            <Input
              name="password"
              placeholder="Contraseña"
              type="password"
              inputRef={register({ required: true })}
            />
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
