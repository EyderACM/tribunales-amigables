import React, { useState, useEffect } from "react";
import { InstructionCard } from "../../molecules/InstructionCard";
import {
  Avatar,
  Heading,
  Button,
  Box,
  Center,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import colors from "./GameInstructionsColors";
import LandingHeader from "components/molecules/LandingHeader/LandingHeader";
import ButtonAction from "components/atoms/ButtonAction/ButtonAction";

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
    <Box pos="inherit" zIndex="10">
      <Box w="100%" height="10%">
        <Center position="relative" mt="5rem">
          <Heading color="social.white" size="2xl">
            Secretos
          </Heading>
        </Center>
      </Box>
      <Box p="4rem">
        <InstructionCard
          title={title}
          information={information}
          nextInstruction={nextInstruction}
          changeToGameView={changeToGameView}
        />
      </Box>
    </Box>
  );
};
