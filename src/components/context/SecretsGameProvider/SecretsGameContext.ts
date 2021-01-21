import { createContext } from "react";
import IBinaryQuestion from "src/interfaces/IBinaryQuestion";

export interface ISecretsGameContext {
  currentQuestion: IBinaryQuestion;
  changeToNextQuestion: () => void;
  changeToPreviusQuestion: () => void;
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
};

export const SecretsGameContext = createContext<ISecretsGameContext>(
  defaultContextValue
);
