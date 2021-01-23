import { When } from "react-if";
import { Heading } from "@chakra-ui/react";
import { SecretsGameProvider } from "components/context/SecretsGameProvider";
import { SecretsGameView } from "components/organisms/SecretsGameView";
import { GameInstructions } from "components/organisms/GameInstructions";
import { useGameFlow } from "hooks";
import { testQuestionsData, testInstructionsData } from "testData";

const Secrets = () => {
  const {
    changeToGameView,
    changeToResultsView,
    inInstructionView,
    inGameView,
    inResultsView,
  } = useGameFlow();

  return (
    <SecretsGameProvider
      initialQuestionsData={testQuestionsData}
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
        <Heading>Results</Heading>
      </When>
    </SecretsGameProvider>
  );
};

export default Secrets;
