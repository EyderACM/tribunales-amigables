import { useToast as useChakraToast } from "@chakra-ui/react";

function useToast() {
  const toast = useChakraToast();

  const callAlertToast = (message = "Algo ha sucedido") => {
    return toast({
      title: "Solicitud fallida",
      description: message,
      status: "error",
      duration: 6000,
      isClosable: true,
      position: "top-right",
    });
  };

  const callSuccessToast = (message = "Exitosamente realizado") => {
    return toast({
      title: "Solicitud exitosa",
      description: message,
      status: "success",
      duration: 6000,
      isClosable: true,
      position: "top-right",
    });
  };

  return { callAlertToast, callSuccessToast };
}

export default useToast;
