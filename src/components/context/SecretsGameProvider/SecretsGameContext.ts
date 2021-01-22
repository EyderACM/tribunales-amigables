import { createContext } from "react";
import IBinaryQuestion from "src/interfaces/IBinaryQuestion";

export interface ISecretsGameContext {
  currentQuestion: IBinaryQuestion;
  changeToNextQuestion: () => void;
  changeToPreviusQuestion: () => void;
  onAnswerSelected: (userAnswer: string) => void;
}

const defaultContextValue: ISecretsGameContext = {
  currentQuestion: {
    description: "",
    correctAnswer: "correct answer",
    incorrectAnswer: "incorrect answer",
    isAnswered: false,
    answerWasCorrect: false,
  },
  changeToNextQuestion: () => {},
  changeToPreviusQuestion: () => {},
  onAnswerSelected: (userAnswer: string) => {},
};

export const SecretsGameContext = createContext<ISecretsGameContext>(
  defaultContextValue
);
