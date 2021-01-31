import {
  Grid,
  Avatar,
  Spacer,
  Heading,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { GameHeader } from "components/molecules/GameHeader";
import { ResultsCard, IResultsCard } from "components/molecules/ResultsCard";

interface IGameResultsTemplate extends IResultsCard {
  gameName: string;
}

export const GameResultsTemplate = ({
  gameName,
  results,
}: IGameResultsTemplate) => {
  return (
    <Grid h="100vh" templateRows="auto 40px 1fr 40px auto" p="20px">
      <GameHeader gameName={gameName} />
      <Spacer />
      <Flex justify="center">
        <ResultsCard results={results} />
      </Flex>
      <Spacer />
      <Flex justify="center">
        <Button colorScheme="blue" w="fit-content">
          Regresar al Menú
        </Button>
      </Flex>
    </Grid>
  );
};
