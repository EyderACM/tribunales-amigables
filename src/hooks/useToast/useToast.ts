import { useToast as useChakraToast, UseToastOptions } from "@chakra-ui/react";

const toastBaseConfig = (message): UseToastOptions => ({
  duration: 6000,
  isClosable: true,
  position: "top-right",
  description: message,
});

function useToast() {
  const toast = useChakraToast();

  const callAlertToast = (message = "Algo ha sucedido") => {
    return toast({
      title: "Solicitud fallida",
      status: "error",
      ...toastBaseConfig(message),
    });
  };

  const callSuccessToast = (message = "Exitosamente realizado") => {
    return toast({
      title: "Solicitud exitosa",
      status: "success",
      ...toastBaseConfig(message),
    });
  };

  return { callAlertToast, callSuccessToast };
}

export default useToast;
