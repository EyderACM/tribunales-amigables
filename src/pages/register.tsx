import React from "react";
import {
  Heading,
  Stack,
  Button,
  FormErrorMessage,
  Center,
  Text,
  Select,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Input } from "../components/atoms/Input";
import useToast from "hooks/useToast/useToast";
import userService from "services/userService/userService";
import useUserAuth from "hooks/useUserAuth/useUserAuth";
import { useRouter } from "next/router";
import { When } from "react-if";
import LandingHeader from "components/molecules/LandingHeader/LandingHeader";
import { cities } from "testData/cities";
import ButtonAction from "components/atoms/ButtonAction/ButtonAction";

interface IRegisterInput {
  email: string;
  name: string;
  username: string;
  password: string;
  password_confirmation: string;
  municipality: string;
}

const Register = () => {
  const router = useRouter();
  const { callAlertToast, callSuccessToast } = useToast();
  const [, setUserToken] = useUserAuth();
  const { register, handleSubmit, errors } = useForm<IRegisterInput>();

  const onSubmit = async (data: IRegisterInput) => {
    console.log(data);
    const {
      email,
      name,
      username,
      password,
      password_confirmation,
      municipality,
    } = data;
    const userFormData = {
      email,
      name,
      username,
      password,
      password_confirmation,
      municipality,
    };

    try {
      const data = await userService.registerUser({ userFormData });
      setUserToken({ token: data["auth_token"] });
      callSuccessToast();
      router.push("/");
    } catch (error) {
      console.log(error);
      callAlertToast(
        "Error con el registro, ingresa correctamente los datos y asegúrate que el correo no haya sido registrado."
      );
    }
  };

  return (
    <Box
      bgColor="social.darkPurple"
      pos="relative"
      zIndex="1"
      overflow="hidden"
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
            <Heading>Regístrate</Heading>
            <Text fontSize="xl">
              Para crear tu cuenta, por favor ingresa la información que se te
              pide a continuación.
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
                  Nombre completo
                </Heading>
                <Input
                  name="name"
                  placeholder="Nombre"
                  inputRef={register({ required: true })}
                />
              </Stack>
              <Stack spacing="1rem">
                <Heading as="p" fontSize="lg">
                  Nombre de usuario
                </Heading>
                <Input
                  name="username"
                  placeholder="Ingresa un nombre de usuario"
                  inputRef={register({ required: true })}
                />
              </Stack>

              <Stack spacing="1rem">
                <Heading as="p" fontSize="lg">
                  Correo Electrónico
                </Heading>
                <Input
                  name="email"
                  placeholder="Correo"
                  type="email"
                  inputRef={register({ required: true })}
                />
                <When condition={!!errors.email}>
                  <FormErrorMessage>
                    Inserta un correo apropiado
                  </FormErrorMessage>
                </When>
              </Stack>

              <Stack spacing="1rem">
                <Heading as="p" fontSize="lg">
                  Contraseña
                </Heading>
                <Input
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                  inputRef={register({ required: true, minLength: 8 })}
                />
                <When condition={Boolean(errors.password)}>
                  <FormErrorMessage>
                    La contraseña es muy corta
                  </FormErrorMessage>
                </When>
              </Stack>

              <Stack spacing="1rem">
                <Heading as="p" fontSize="lg">
                  Escribe nuevamente la contraseña
                </Heading>
                <Input
                  name="password_confirmation"
                  placeholder="Confirmar contraseña"
                  type="password"
                  inputRef={register({ required: true, minLength: 8 })}
                />
              </Stack>

              <Stack spacing="1rem">
                <Heading as="p" fontSize="lg">
                  Municipio en el que vives
                </Heading>
                <Select
                  name="municipality"
                  placeholder="Selecciona un municipio"
                  bgColor="social.white"
                  color="gray.400"
                  ref={register({ required: true })}
                >
                  {cities.map((city, i) => (
                    <option key={i} value={city}>
                      {city}
                    </option>
                  ))}
                </Select>
              </Stack>

              <Stack spacing="2rem">
                <ButtonAction
                  maxW="300px"
                  w="100%"
                  alignSelf="center"
                  type="submit"
                >
                  Registrar
                </ButtonAction>
                <Text>
                  ¿Ya tienes una cuenta?{" "}
                  <Link href="/login" textDecoration="underline">
                    Inicia sesión aquí
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

export default Register;
