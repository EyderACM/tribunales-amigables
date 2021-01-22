import { useContext, useEffect } from "react";
import { Button, Heading } from "@chakra-ui/react";
import { MenuCard } from "../../molecules/MenuCard";
import { SecretsGameContext } from "src/components/context/SecretsGameProvider";

export const SecretsGameView = () => {
  const {
    currentQuestion,
    changeToNextQuestion,
    changeToPreviusQuestion,
    onAnswerSelected,
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
    </>
  );
};
