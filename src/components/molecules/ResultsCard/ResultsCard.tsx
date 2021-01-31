import { Stack, Heading, Text } from "@chakra-ui/react";

export interface IResult {
  name: string;
  status: string;
}

export interface IResultsCard {
  results: IResult[];
}

export const ResultsCard = ({ results }: IResultsCard) => {
  return (
    <Stack
      spacing="15px"
      align="center"
      bg="gray.300"
      p="15px"
      h="fit-content"
      borderRadius="10px"
    >
      <Heading size="md">Resultados</Heading>
      <Stack spacing="5px" p="5px" bg="gray.200">
        {results.map((result) => (
          <Stack justify="space-between" spacing="50px" direction="row">
            <Text>{result.name}</Text>
            <Text>{result.status}</Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
