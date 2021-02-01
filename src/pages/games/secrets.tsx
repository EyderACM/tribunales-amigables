import { GetServerSideProps } from "next";
import { When } from "react-if";
import { SecretsGameProvider } from "components/context/SecretsGameProvider";
import { SecretsGameView } from "components/organisms/SecretsGameView";
import { GameInstructions } from "components/organisms/GameInstructions";
import { useGameFlow } from "hooks";
import { testInstructionsData } from "testData";
import { SecretsGameResults } from "components/organisms/SecretsGameResults";
import IBinaryQuestion from "interfaces/IBinaryQuestion";
import { secretsGameService } from "services/secretsGameService";
import useProtectedRoute from "hooks/useProtectedRoute/useProtectedRoute";

const gameService = secretsGameService();

interface ISecrets {
  questions: IBinaryQuestion[];
}

const Secrets = ({ questions }: ISecrets) => {
  useProtectedRoute();
  const {
    changeToGameView,
    changeToResultsView,
    inInstructionView,
    inGameView,
    inResultsView,
  } = useGameFlow();

  return (
    <SecretsGameProvider
      initialQuestionsData={questions}
      changeToResultsView={changeToResultsView}
    >
      <When condition={inInstructionView}>
        <GameInstructions
          data={testInstructionsData}
          changeToGameView={changeToGameView}
        />
      </When>
      <When condition={inGameView}>
        <SecretsGameView />
      </When>
      <When condition={inResultsView}>
        <SecretsGameResults />
      </When>
    </SecretsGameProvider>
  );
};

export default Secrets;

export const getServerSideProps: GetServerSideProps = async () => {
  const questions = await gameService.fetchQuestions();
  return { props: { questions } }
}