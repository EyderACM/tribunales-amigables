import { Box, Center, Avatar, Heading } from "@chakra-ui/react";

export interface IGameHeader {
  gameName: string;
}

export const GameHeader = ({ gameName }: IGameHeader) => {
  return (
    <Box w="100%" height="10%">
      <Center position="relative" top="10px">
        <Heading>Secretos</Heading>
      </Center>
      <Avatar left="10px" bottom="30px" />
    </Box>
  );
};
