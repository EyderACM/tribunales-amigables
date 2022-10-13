import { Center, Box, Text, Stack, HStack, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import ButtonAction from "components/atoms/ButtonAction/ButtonAction";
import { MouseEventHandler } from "react";

interface IInstructionCard {
  title: string;
  information: string;
  nextInstruction: MouseEventHandler;
  changeToGameView: MouseEventHandler;
}

export const InstructionCard = ({
  title,
  information,
  nextInstruction,
  changeToGameView,
}: IInstructionCard) => {
  const useChangeToGameView = (event) => {
    changeToGameView(event);
  };

  return (
    <Center>
      <Box
        width="90%"
        p="2rem"
        pt="8rem"
        bgColor="rgba(101, 168, 187, 0.67)"
        borderRadius="10px"
        fontFamily="Acme"
        textAlign="center"
        maxW="1200px"
      >
        <Stack spacing="2rem">
          <HStack>
            <Image src="/images/jaguar.png" w="250px" />
            <Box p="3rem" bgColor="social.white" borderRadius="67px">
              <Text maxW="300px">{information}</Text>
            </Box>
          </HStack>
          <HStack alignSelf="flex-end">
            <Box p="3rem" bgColor="social.white" borderRadius="67px">
              <Text maxW="300px">{information}</Text>
            </Box>
            <Image src="/images/robot.png" w="250px" />
          </HStack>
          <Stack spacing="2rem" justify="center" align="center">
            <ButtonAction w="300px" fontFamily="Acme" onClick={nextInstruction}>
              ¡Siguiente!
            </ButtonAction>
            <Button
              variant="link"
              fontFamily="Acme"
              color="social.white"
              onClick={changeToGameView}
            >
              Saltar
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};
