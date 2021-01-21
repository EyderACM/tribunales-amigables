import { Center, Heading, Box, Text } from "@chakra-ui/react";
import colors from "./InstructionCardColors";

interface IInstructionCard {
  title: string;
  information: string;
}

export const InstructionCard = ({ title, information }: IInstructionCard) => {
  return (
    <Center>
      <Box
        width="80%"
        h="500px"
        bg={colors.FILL_COLOR}
        borderWidth="10px"
        borderColor={colors.BORDER_COLOR}
        borderRadius="10px"
      >
        <Center>
          <Heading>{title}</Heading>
        </Center>
        <Center>
          <Text width="100%" align="center" fontSize="28px">
            {information}
          </Text>
        </Center>
      </Box>
    </Center>
  );
};
