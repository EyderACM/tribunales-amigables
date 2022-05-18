import {
  Center,
  Heading,
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  Button,
  Link,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import colors from "./InstructionCardColors";
import { Image } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IInstructionCard {
  title: string;
  information: string;
  nextInstruction: MouseEventHandler;
  changeToGameView: MouseEventHandler;
}

export const InstructionCard = ({
  title,
  information,
  nextInstruction,
  changeToGameView,
}: IInstructionCard) => {
  const useChangeToGameView = (event) => {
    changeToGameView(event);
  };

  return (
    <Center>
      <Box
        width="80%"
        h="75vh"
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
                wordBreak="break-all"
              >
                <Image src="/images/leftChatIcon.svg" width="90%" />
                {/**                <Wrap>
                  <WrapItem>{information}</WrapItem>
                </Wrap> */}
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
                  <Image src="/images/rightChatIcon.svg" width="90%" />
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Flex
          width="100%"
          height="15%"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Button
            width="30%"
            margin="auto"
            bg={colors.BTN_FILL}
            fontWeight="Regular"
            border="0.5px solid "
            borderColor={colors.BTN_BORDER}
            borderRadius="6px"
            boxShadow="0px 5px 0px #62915E"
            display="block"
            onClick={nextInstruction}
            _hover={{ background: colors.BTN_BORDER }}
          >
            ¡Siguiente!
          </Button>
          <Text
            color="#FFFFFF"
            margin="auto"
            marginTop="10px"
            onClick={useChangeToGameView}
            textDecoration="underline"
            display="block"
            _hover={{ cursor: "pointer" }}
          >
            Saltar
          </Text>
        </Flex>
      </Box>
    </Center>
  );
};
