import { useContext } from "react";
import { Button, Center, Heading, Image, ScaleFade } from "@chakra-ui/react";
import { MenuCard } from "components/molecules/MenuCard";
import { SecretsGameContext } from "components/context/SecretsGameProvider";

export const SecretsGameView = () => {
  const {
    currentQuestion,
    changeToNextQuestion,
    changeToPreviusQuestion,
    onAnswerSelected,
    correctCheckIsShowing,
  } = useContext(SecretsGameContext);

  return (
    <>
      <div>Secrets View</div>
      <Heading>{currentQuestion.description}</Heading>
      <MenuCard
        label="incorrect"
        onClick={() => onAnswerSelected(currentQuestion.incorrectAnswer)}
      />
      <MenuCard
        label="correct"
        onClick={() => onAnswerSelected(currentQuestion.correctAnswer)}
      />
      <Button onClick={changeToPreviusQuestion}>previus</Button>
      <Button onClick={changeToNextQuestion}>next</Button>
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
