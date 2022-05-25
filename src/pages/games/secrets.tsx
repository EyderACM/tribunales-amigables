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
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import LandingHeader from "components/molecules/LandingHeader/LandingHeader";

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
    <Box
      background="#419FBB"
      backgroundImage='url("/images/GameBg.svg")'
      width="100%"
      height="100%"
    >
      <LandingHeader />
      <Box>
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
        <Box display="block">
          <Flex
            height="12vh"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Box
              width="30px"
              height="30px"
              background="#6C3EA2"
              borderRadius="50px"
            >
              <Flex
                width="100%"
                height="100%"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-evenly"
              >
                <Image
                  width="60%"
                  src="/images/getOutIcon.svg"
                  _hover={{ cursor: "pointer" }}
                />
              </Flex>
            </Box>

            <Text color="#FFFFFF" fontSize="12px">
              Salir del juego
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Secrets;

export const getServerSideProps: GetServerSideProps = async () => {
  const questions = await gameService.fetchQuestions();
  return { props: { questions } };
};
