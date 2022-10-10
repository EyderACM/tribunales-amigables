import { createContext } from "react";
import IBinaryQuestion from "interfaces/IBinaryQuestion";
import IBinaryQuestionResult from "interfaces/IBinaryQuestionResult";

export interface ISecretsGameContext {
  currentQuestion: IBinaryQuestion;
  changeToNextQuestion: () => void;
  changeToPreviusQuestion: () => void;
  onAnswerSelected: (userAnswer: string, initTime: Date) => void;
  correctCheckIsShowing: boolean;
  results: IBinaryQuestionResult[];
  isInFirstQuestion: boolean;
  isInLastQuestion: boolean;
  changeToResultsView: () => void;
}

export const SecretsGameContext = createContext<ISecretsGameContext>(
  {} as ISecretsGameContext
);
