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
    <Box w="100%" h="100%">
      <GameHeader gameName="Secretos" />
      <Spacer />

      <Stack spacing="40px" align="center">
        <Text fontSize="xl" textAlign="center" maxWidth="500px">
          {currentQuestion.question}
        </Text>
        <Image
          display="inline-block"
          src="/images/IngameSecretsRoboto.svg"
          boxSize="10%"
        />

        <Button
          width="30%"
          margin="auto"
          bg={"#7DB778"}
          fontWeight="Regular"
          border="0.5px solid "
          borderColor={"#7DB778"}
          borderRadius="6px"
          boxShadow="0px 5px 0px #62915E"
          display="block"
          alt="contar secreto"
          onClick={() => onAnswerSelected("secreto malo")}
        >
          ¡Contarlo!
        </Button>
        <Button
          width="30%"
          margin="auto"
          bg={"#7DB778"}
          fontWeight="Regular"
          border="0.5px solid "
          borderColor={"#7DB778"}
          borderRadius="6px"
          boxShadow="0px 5px 0px #62915E"
          display="block"
          alt="guardar secreto"
          onClick={() => onAnswerSelected("secreto bueno")}
        >
          No contarlo
        </Button>
        <Button
          width="30%"
          margin="auto"
          bg={"#7DB778"}
          fontWeight="Regular"
          border="0.5px solid "
          borderColor={"#7DB778"}
          borderRadius="6px"
          boxShadow="0px 5px 0px #62915E"
          display="block"
        >
          No lo se
        </Button>

        <Stack
          direction="row"
          spacing="50px"
          justify="center"
          align="center"
          wrap="wrap"
        ></Stack>
      </Stack>
      <Spacer />
      <Grid placeItems="center">
        <Button
          colorScheme="green"
          w="fit-content"
          onClick={changeToResultsView}
        >
          Finalizar
        </Button>
      </Grid>
      <FadeInOutImage
        src="/images/correct-answer.svg"
        show={correctCheckIsShowing}
      />
    </Box>
  );
};
