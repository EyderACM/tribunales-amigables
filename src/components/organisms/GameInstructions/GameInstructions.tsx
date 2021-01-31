import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import { InstructionCard } from "../../molecules/InstructionCard";
import { Avatar, Heading, Button, Box, Center, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import colors from "./GameInstructionsColors";

interface IGameInstructions {
  data: { titles: string[]; descriptions: string[] };
  changeToGameView: () => void;
}

export const GameInstructions = ({
  data,
  changeToGameView,
}: IGameInstructions) => {
  const router = useRouter();
  const [index, setIndex] = useState<number>(0);
  const [title, setSectionTitle] = useState(data.titles[index]);
  const [information, setSectionInformation] = useState(
    data.descriptions[index]
  );

  useEffect(() => {
    setSectionTitle(data.titles[index]);
    setSectionInformation(data.descriptions[index]);
  }, [index]);

  const previousInstruction = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const nextInstruction = () => {
    if (index < data.descriptions.length - 1) {
      setIndex(index + 1);
    } else {
      changeToGameView();
    }
  };

  return (
    <Box>
      <Box w="100%" height="10%">
        <Center position="relative" top="10px">
          <Heading>Secretos</Heading>
        </Center>
        <Avatar left="10px" bottom="30px" src="/images/logo.png"/>
      </Box>
      <Box>
        <InstructionCard title={title} information={information} />
      </Box>
      <Box w="100%" height="10%">
        <Stack
          justifyContent="center"
          marginTop="30px"
          direction="row"
          spacing="60px"
        >
          <Button
            bg={colors.FRESH_GRASS}
            fontWeight="Regular"
            leftIcon={<ChevronLeftIcon w="6" h="6" />}
            onClick={previousInstruction}
          >
            Regresar
          </Button>
          <Button
            bg={colors.CALM_WATER}
            fontWeight="Regular"
            onClick={changeToGameView}
          >
            Saltar Explicación
          </Button>
          <Button
            bg={colors.FRESH_GRASS}
            fontWeight="Regular"
            rightIcon={<ChevronRightIcon w="6" h="6" />}
            onClick={nextInstruction}
          >
            Continuar
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
