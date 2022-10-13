import { Heading, Stack, Image, Box, Center, Text } from "@chakra-ui/react";
import ButtonAction from "components/atoms/ButtonAction/ButtonAction";
import LandingHeader from "components/molecules/LandingHeader/LandingHeader";
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
  const [, setUserData] = useUserAuth();
  const { register, handleSubmit, errors } = useForm<IRegisterInput>();

  const onSubmit = async (data: IRegisterInput) => {
    const { email, password } = data;
    const userFormData = { email, password };

    try {
      const data = await userService.logingUser({
        userFormData,
        remember: true,
      });
      const isAdmin: boolean = email === "test@gmail.com";
      setUserData({ token: data["auth_token"] as string, isAdmin });
      callSuccessToast();
      const route = isAdmin ? "/admin" : "/";
      router.push(route);
    } catch (error) {
      callAlertToast(
        "Error con el registro, ingresa correctamente los datos y asegúrate que el correo exista."
      );
    }
  };

  return (
    <Box
      bgColor="social.darkPurple"
      pos="relative"
      zIndex="1"
      overflow="hidden"
      py="1.75rem"
    >
      <LandingHeader />
      <Image
        src="/images/balam.png"
        pos="absolute"
        top="35rem"
        left="0"
        display={{ base: "none", lg: "block" }}
      />
      <Image
        src="/images/niño1.png"
        pos="absolute"
        top="20rem"
        right="0"
        display={{ base: "none", lg: "block" }}
      />
      <Image
        src="/images/niño2.png"
        pos="absolute"
        top="50rem"
        right="0"
        display={{ base: "none", lg: "block" }}
      />
      <Image
        src="/images/vectorgrande.png"
        zIndex="-1"
        pos="absolute"
        right="0"
        display={{ base: "none", lg: "block" }}
      />
      <Image
        src="/images/control.png"
        zIndex="-1"
        pos="absolute"
        left="0"
        bottom="0"
        display={{ base: "none", lg: "block" }}
      />
      <Box
        zIndex="-1"
        pos="absolute"
        w="100px"
        h="100px"
        top="20rem"
        left="rem"
        borderRadius="50%"
        background="#653895"
      />
      <Center>
        <Stack
          bgColor="#8854C0"
          color="social.white"
          textAlign="center"
          align="center"
          m={{ md: "5rem" }}
          borderRadius={{ md: "2rem" }}
          w="100%"
          maxW="800px"
        >
          <Stack spacing="2rem" my="4rem" px="2rem" align="center" maxW="600px">
            <Heading>¡Hola de nuevo!</Heading>
            <Text fontSize="xl">
              Por favor, ingresa tu correo y contraseña para poder ingresar a
              Tribunales Amigables
            </Text>
            <Stack
              as="form"
              spacing="2rem"
              maxWidth="500px"
              justify="center"
              w="100%"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Stack spacing="1rem">
                <Heading as="p" fontSize="lg">
                  Correo Electrónico
                </Heading>
                <Input
                  name="email"
                  placeholder="correoelectrónico@correo.com"
                  type="email"
                  inputRef={register({ required: true })}
                />
              </Stack>

              <Stack spacing="1rem">
                <Heading as="p" fontSize="lg">
                  Contraseña
                </Heading>
                <Input
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                  inputRef={register({ required: true })}
                />
              </Stack>

              <Stack spacing="2rem">
                <ButtonAction
                  maxW="300px"
                  w="100%"
                  alignSelf="center"
                  type="submit"
                >
                  Iniciar Sesión
                </ButtonAction>
                <Text>
                  ¿Aún no creas una cuenta?
                  <Link href="/register" textDecoration="underline">
                    Creala aquí
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
};

export default Login;
