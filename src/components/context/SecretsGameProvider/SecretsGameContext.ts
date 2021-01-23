import { createContext } from "react";
import IBinaryQuestion from "interfaces/IBinaryQuestion";
import IBinaryQuestionResult from "interfaces/IBinaryQuestionResult";

export interface ISecretsGameContext {
  currentQuestion: IBinaryQuestion;
  changeToNextQuestion: () => void;
  changeToPreviusQuestion: () => void;
  onAnswerSelected: (userAnswer: string) => void;
  correctCheckIsShowing: boolean;
  results: IBinaryQuestionResult[];
  isInFirstQuestion: boolean;
  isInLastQuestion: boolean;
}

export const SecretsGameContext = createContext<ISecretsGameContext>(
  {} as ISecretsGameContext
);
