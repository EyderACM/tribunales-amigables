import { useContext, useEffect } from "react";
import {
  Button,
  Center,
  Image,
  Grid,
  Spacer,
  Stack,
  Text,
  Box,
  Heading,
  HStack,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Modal,
} from "@chakra-ui/react";
import { SecretsGameContext } from "components/context/SecretsGameProvider";
import { FadeInOutImage } from "components/atoms/FadeInOutImage";
import ButtonAction from "components/atoms/ButtonAction/ButtonAction";
import { useState } from "react";

export const SecretsGameView = () => {
  const {
    currentQuestion,
    onAnswerSelected,
    correctCheckIsShowing,
    changeToResultsView,
  } = useContext(SecretsGameContext);

  const [initTime, setInitTime] = useState<Date>(null)

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setInitTime(new Date());
  }, [currentQuestion.question]);

  return (
    <>
      <Box w="100%" height="10%" pos="inherit" zIndex="1">
        <Center position="relative" top="40px">
          <Heading color="social.white" size="2xl">
            Secretos
          </Heading>
        </Center>
        <Spacer />
        <Stack
          direction="row"
          p="8rem 2rem"
          maxW="1200px"
          m="0 auto"
          borderRadius="17px"
          my="6rem"
          spacing="40px"
          align="center"
          justify="center"
          bgColor="rgba(101, 168, 187, 0.67)"
          pos="relative"
        >
          <Image src="/images/robotPregunta.png" w="400px" />
          <HStack pos="absolute" bottom="10" left="0" spacing="2rem">
            <Button color="social.white" variant="link">
              Ajustes
            </Button>
            <Button color="social.white" variant="link" onClick={onOpen}>
              Ayuda
            </Button>
            <Button color="social.white" variant="link">
              Reiniciar
            </Button>
          </HStack>
          <Stack
            align="center"
            bgColor="social.white"
            borderRadius="67px"
            p="5rem"
          >
            <Text
              fontSize="xl"
              textAlign="center"
              maxWidth="500px"
              fontFamily="Tajawal"
            >
              {currentQuestion.question}
            </Text>
            <Text
              fontSize="xl"
              textAlign="center"
              maxWidth="500px"
              fontFamily="Tajawal"
            >
              ¿Puedo contar el secreto o debería no hacerlo?
            </Text>
            <Stack justify="center" w="300px" wrap="wrap" spacing="1rem">
              <ButtonAction
                fontFamily="Acme"
                onClick={() => onAnswerSelected('secreto bueno', initTime)}
              >
                ¡Contarlo!
              </ButtonAction>
              <ButtonAction
                fontFamily="Acme"
                onClick={() =>
                  onAnswerSelected("secreto malo", initTime)
                }
              >
                No Contarlo
              </ButtonAction>
              <ButtonAction
                fontFamily="Acme"
                onClick={() =>
                  onAnswerSelected("no lo se", initTime)
                }
              >
                No lo sé
              </ButtonAction>
            </Stack>
          </Stack>
        </Stack>
        <Spacer />

        <FadeInOutImage
          src="/images/correct-answer.svg"
          show={correctCheckIsShowing}
        />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bgColor="social.darkPurple" maxW="1000px">
          <ModalCloseButton bgColor="social.yellow" borderRadius="50%" />
          <ModalBody p="6rem 2rem" w="100%">
            <HStack justify="space-between">
              <Image src="/images/jaguar.png" />
              <Stack
                bgColor="social.white"
                w="500px"
                borderRadius="64px"
                p="3rem"
                fontFamily="Acme"
                textAlign="center"
                spacing="2rem"
              >
                <Stack align="center">
                  <Text>
                    Recuerda: <br /> Este botón significa que el secreto es
                    peligroso para Roboto y debería decírselo a alguien
                  </Text>
                  <ButtonAction fontSize="20px" w="250px">
                    ¡Contarlo!
                  </ButtonAction>
                </Stack>
                <Stack align="center">
                  <Text>
                    Este significa que no significa ningún peligro para Roboto y
                    no debería decirlo.
                  </Text>
                  <ButtonAction fontSize="20px" w="250px">
                    No Contarlo
                  </ButtonAction>
                </Stack>
                <Stack align="center">
                  <Text>
                    Y este es para cuando no estás seguro si es apropiado
                    decírselo a alguien o no.
                  </Text>
                  <ButtonAction fontSize="20px" w="250px">
                    No lo sé
                  </ButtonAction>
                </Stack>
              </Stack>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
};
