import {
  Center,
  Heading,
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import colors from "./InstructionCardColors";
import { Image } from "@chakra-ui/react";

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
        borderColor={colors.BORDER_COLOR}
        borderRadius="17px"
      >
        <Center>
          <Heading fontSize="3em">{title}</Heading>
        </Center>

        <Box w="90%" h="70%" margin="auto">
          <Grid
            w="100%"
            h="100%"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={0}
          >
            <GridItem rowSpan={3} colSpan={1} bg="">
              <Image src="/images/TigreIcon.svg" boxSize="100%" />
            </GridItem>
            <GridItem rowSpan={2} colSpan={1} bg="">
              <Flex
                height="100%"
                flexDirection="column"
                justifyContent="flex-end"
              >
                <Image src="/images/chatIcon.svg" width="90%" />
              </Flex>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} bg="" />
            <GridItem rowSpan={3} colSpan={1} bg="">
              <Image src="/images/RobotoIcon.svg" boxSize="100%" />
            </GridItem>
            <GridItem rowSpan={2} colSpan={1} bg="">
              <Flex
                height="100%"
                flexDirection="column"
                justifyContent="flex-start"
              >
                <Flex height="100%" justifyContent="flex-end">
                  <Image src="/images/chatIcon.svg" width="90%" />
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Center>
  );
};
