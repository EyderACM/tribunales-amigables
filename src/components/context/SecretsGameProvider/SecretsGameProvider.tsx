import { FC } from "react";
import useSound from "use-sound";
import { ISecretsGameContext, SecretsGameContext } from "./SecretsGameContext";
import IBinaryQuestion from "src/interfaces/IBinaryQuestion";
import { useArrayNavigator, useBinaryQuestions } from "src/hooks";

interface ISecretsGameProvider {
  initialQuestionsData: IBinaryQuestion[];
}

export const SecretsGameProvider: FC<ISecretsGameProvider> = ({
  initialQuestionsData,
  children,
}) => {
  const { questions, checkIfAnswerIsCorrect } = useBinaryQuestions(
    initialQuestionsData
  );
  const [
    currentQuestion,
    currentQuestionIndex,
    changeToPreviusQuestion,
    changeToNextQuestion,
  ] = useArrayNavigator<IBinaryQuestion>(questions);
  const [playCorrectAnswerSound] = useSound("/sounds/correct-answer.mp3");

  const handleCorrectAnswer = () => {
    playCorrectAnswerSound();
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

    changeToNextQuestion();
  };

  const providerValue: ISecretsGameContext = {
    currentQuestion,
    changeToNextQuestion,
    changeToPreviusQuestion,
    onAnswerSelected,
  };

  return (
    <SecretsGameContext.Provider value={providerValue}>
      {children}
    </SecretsGameContext.Provider>
  );
};
