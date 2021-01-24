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
} from "@chakra-ui/react";
import { SecretsGameContext } from "components/context/SecretsGameProvider";
import { GameHeader } from "components/molecules/GameHeader";
import { ClickableImage } from "components/atoms/ClickableImage";

export const SecretsGameView = () => {
  const {
    currentQuestion,
    onAnswerSelected,
    correctCheckIsShowing,
    changeToResultsView,
  } = useContext(SecretsGameContext);

  return (
    <>
      <Grid h="100vh" templateRows="auto 10px 1fr 10px auto" p="20px">
        <GameHeader gameName="Secretos" />
        <Spacer />
        <Stack spacing="40px" align="center">
          <Text fontSize="xl" textAlign="center" maxWidth="500px">
            {currentQuestion.description}
          </Text>
          <Stack
            direction="row"
            spacing="50px"
            justify="center"
            align="center"
            wrap="wrap"
          >
            <ClickableImage
              onClick={() => onAnswerSelected(currentQuestion.incorrectAnswer)}
            />
            <ClickableImage
              onClick={() => onAnswerSelected(currentQuestion.correctAnswer)}
            />
          </Stack>
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
      </Grid>
      <Center
        w="100%"
        h="100vh"
        position="absolute"
        zIndex={5}
        top="0px"
        display={correctCheckIsShowing ? "grid" : "none"}
      >
        <ScaleFade initialScale={0.9} in={correctCheckIsShowing}>
          <Image src="/images/correct-answer.svg" boxSize="70%" />
        </ScaleFade>
      </Center>
    </>
  );
};
