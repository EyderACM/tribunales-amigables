import { useContext } from "react";
import {
  Button,
  Center,
  Image,
  ScaleFade,
  Grid,
  Spacer,
  Stack,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { SecretsGameContext } from "components/context/SecretsGameProvider";
import { GameHeader } from "components/molecules/GameHeader";
import { ClickableImage } from "components/atoms/ClickableImage";
import { FadeInOutImage } from "components/atoms/FadeInOutImage";

export const SecretsGameView = () => {
  const {
    currentQuestion,
    onAnswerSelected,
    correctCheckIsShowing,
    changeToResultsView,
  } = useContext(SecretsGameContext);

  return (
    <Box w="100%" h="75vh" display="inline-block">
      <GameHeader gameName="Secretos" />

      <Box
        margin="auto"
        width="80%"
        height="100%"
        background="rgba(101, 168, 187, 0.67)"
      >
        <Flex width="100%" height="100%">
          <Box width="50%" margin="auto">
            <Image
              width="60%"
              margin="auto"
              src="/images/IngameSecretsRoboto.svg"
            />
          </Box>

          <Box
            width="45%"
            height="80%"
            margin="auto"
            backgroundImage='url("/images/LongChat.svg")'
            backgroundRepeat="no-repeat"
            bgSize="100% 100%"
          >
            <Flex
              width="100%"
              height="70%"
              flexDirection="column"
              justifyContent="space-around"
              alignItems="center"
            >
              <Text fontSize="xl" textAlign="center" maxWidth="500px">
                {currentQuestion.question}
              </Text>
              <Text fontSize="xl" textAlign="center" maxWidth="500px">
                ¿Puedo contar el secreto o debería no hacerlo?
              </Text>
              <Button /*create componenet*/
                width="40%"
                marginTop="5%"
                bg={"#7DB778"}
                fontWeight="Regular"
                border="0.5px solid "
                borderColor={"#7DB778"}
                borderRadius="6px"
                boxShadow="0px 5px 0px #62915E"
                alt="contar secreto"
                onClick={() => onAnswerSelected("secreto malo")}
              >
                ¡Contarlo!
              </Button>
              <Button
                width="40%"
                marginTop="5%"
                bg={"#7DB778"}
                fontWeight="Regular"
                border="0.5px solid "
                borderColor={"#7DB778"}
                borderRadius="6px"
                boxShadow="0px 5px 0px #62915E"
                alt="guardar secreto"
                onClick={() => onAnswerSelected("secreto bueno")}
              >
                No contarlo
              </Button>
              <Button
                width="40%"
                marginTop="5%"
                bg={"#7DB778"}
                fontWeight="Regular"
                border="0.5px solid "
                borderColor={"#7DB778"}
                borderRadius="6px"
                boxShadow="0px 5px 0px #62915E"
              >
                No lo se
              </Button>
            </Flex>
          </Box>
        </Flex>

        <Grid placeItems="center">
          <Button
            colorScheme="green"
            w="fit-content"
            onClick={changeToResultsView}
          >
            Finalizar
          </Button>
        </Grid>
      </Box>
      <FadeInOutImage
        src="/images/correct-answer.svg"
        show={correctCheckIsShowing}
      />
    </Box>
  );
};
