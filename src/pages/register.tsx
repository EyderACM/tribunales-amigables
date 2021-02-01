import React from "react";
import {
  Heading,
  Grid,
  Spacer,
  Stack,
  Button,
  Divider,
  Image,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Input } from "../components/atoms/Input";
import useToast from "hooks/useToast/useToast";
import userService from "services/userService/userService";
import useUserAuth from "hooks/useUserAuth/useUserAuth";
import { useRouter } from "next/router";
import { When } from "react-if";

interface IRegisterInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  password_confirmation: string;
}

const Register = () => {
  const router = useRouter();
  const { callAlertToast, callSuccessToast } = useToast();
  const [, setUserToken] = useUserAuth();
  const { register, handleSubmit, errors } = useForm<IRegisterInput>();

  const onSubmit = async (data: IRegisterInput) => {
    const { email, password, password_confirmation } = data;
    const userFormData = { email, password, password_confirmation };

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
    <Grid h="100vh" templateRows="auto 40px 1fr" p="20px" align="center">
      <Heading>Regístrate</Heading>
      <Spacer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Image
          src="/images/happy-cat.svg"
          boxSize="100px"
          objectFit="contain"
          transform="translateY(9px)"
        />
        <Divider opacity={1} borderWidth="5px" borderColor="black" />
        <Stack spacing="15px" p="10px 40px" maxWidth="500px">
          <Input
            name="firstName"
            placeholder="Nombre"
            inputRef={register({ required: true })}
          />
          <Input
            name="lastName"
            placeholder="Apellidos"
            inputRef={register({ required: true })}
          />
          <Input
            name="email"
            placeholder="Correo"
            type="email"
            inputRef={register({ required: true })}
          />
          <When condition={!!errors.email}>
            <FormErrorMessage>Inserta un correo apropiado</FormErrorMessage>
          </When>
          <Input
            name="password"
            placeholder="Contraseña"
            type="password"
            inputRef={register({ required: true, minLength: 8 })}
          />
          <When condition={Boolean(errors.password)}>
            <FormErrorMessage>La contraseña es muy corta</FormErrorMessage>
          </When>
          <Input
            name="password_confirmation"
            placeholder="Confirmar contraseña"
            type="password"
            inputRef={register({ required: true, minLength: 8 })}
          />
          <Button colorScheme="green" type="submit">
            Registrar
          </Button>
        </Stack>
      </form>
    </Grid>
  );
};

export default Register;
