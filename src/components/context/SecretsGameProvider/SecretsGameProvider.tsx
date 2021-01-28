import { FC } from "react";
import useSound from "use-sound";
import { useDisclosure } from "@chakra-ui/react";
import { ISecretsGameContext, SecretsGameContext } from "./SecretsGameContext";
import IBinaryQuestion from "interfaces/IBinaryQuestion";
import { useArrayNavigator, useBinaryQuestions } from "hooks";

interface ISecretsGameProvider {
  initialQuestionsData: IBinaryQuestion[];
  changeToResultsView: () => void;
}

export const SecretsGameProvider: FC<ISecretsGameProvider> = ({
  initialQuestionsData,
  changeToResultsView,
  children,
}) => {
  const {
    questions,
    checkIfAnswerIsCorrect,
    saveAnswer,
    results,
  } = useBinaryQuestions(initialQuestionsData);
  const [
    currentQuestion,
    currentQuestionIndex,
    changeToPreviusQuestion,
    changeToNextQuestion,
    isInFirstQuestion,
    isInLastQuestion,
  ] = useArrayNavigator<IBinaryQuestion>(questions);
  const [playCorrectAnswerSound] = useSound("/sounds/correct-answer.mp3");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const closeCheckAfterOneSecond = () => {
    const showInterval = setInterval(() => {
      onClose();
      clearInterval(showInterval);
    }, 1000);
  }

  const handleCorrectAnswer = () => {
    playCorrectAnswerSound();
    onOpen();
    closeCheckAfterOneSecond();
  };

  const handleIncorrectAnswer = () => {
    console.log("incorrect answer");
  };

  const onAnswerSelected = (userAnswer: string) => {
    const answerIsCorrect = checkIfAnswerIsCorrect({
      questionIndex: currentQuestionIndex,
      answer: userAnswer,
    });

    if (answerIsCorrect) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }

    saveAnswer({
      questionIndex: currentQuestionIndex,
      answer: userAnswer,
    });

    if (isInLastQuestion) {
      changeToResultsView();
    } else {
      changeToNextQuestion();
    }
  };

  const providerValue: ISecretsGameContext = {
    currentQuestion,
    changeToNextQuestion,
    changeToPreviusQuestion,
    onAnswerSelected,
    correctCheckIsShowing: isOpen,
    results,
    isInFirstQuestion,
    isInLastQuestion,
    changeToResultsView,
  };

  return (
    <SecretsGameContext.Provider value={providerValue}>
      {children}
    </SecretsGameContext.Provider>
  );
};
