import { FC } from "react";
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
  const { questions } = useBinaryQuestions(initialQuestionsData);
  const {
    currentValue,
    changeToNextValue,
    changeToPreviusValue,
  } = useArrayNavigator<IBinaryQuestion>(questions);

  const providerValue: ISecretsGameContext = {
    currentQuestion: currentValue,
    changeToNextQuestion: changeToNextValue,
    changeToPreviusQuestion: changeToPreviusValue,
  };

  return (
    <SecretsGameContext.Provider value={providerValue}>
      {children}
    </SecretsGameContext.Provider>
  );
};
