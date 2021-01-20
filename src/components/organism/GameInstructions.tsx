import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import InstrucionCard from "../molecules/InstrucionCard";
import { Flex, Avatar, Heading, Button, Box, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";

//NEXT.JS
//GameInstructions -> organismo
const GameInstructions = ({ data, url }) => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [title, setSectionTitle] = useState(data.titles[index]);
  const [information, setSectionInformation] = useState(
    data.descriptions[index]
  );

  //corre despues de que se actualiza realmente, vacio cuando solo lo quiero 1 vez, NADA LO HACE INFINITO :o
  //primer state luego funcion para setear el state
  useEffect(() => {
    setSectionTitle(data.titles[index]);
    setSectionInformation(data.descriptions[index]);
  }, [index]);

  //modificar estado del label y párrafo del componente
  let previousInstruction = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  let nextInstruction = () => {
    if (index < data.descriptions.length - 1) {
      setIndex(index + 1);
    } else {
      router.push(url);
    }
  };

  let skipInstruction = () => {
    router.push(url);
  };

  return (
    <div>
      <Box w="100%" height="10%">
        <Center position="relative" top="10px">
          <Heading>Secretos</Heading>
        </Center>
        <Avatar left="10px" bottom="30px"></Avatar>
      </Box>
      <Box>
        <InstrucionCard
          title={title}
          information={information}
        ></InstrucionCard>
      </Box>
      <Box w="100%" height="10%">
        <Flex justifyContent="center">
          <Button
            color="black"
            bg="#82BF3F"
            height="33px"
            width="106"
            margin="30px"
            fontWeight="Regular"
            _hover={{}}
            onClick={previousInstruction}
          >
            <ChevronLeftIcon w="6" h="6" color="black"></ChevronLeftIcon>
            Regresar
          </Button>
          <Button
            color="black"
            bg="#6CC6EC"
            height="33px"
            width="161px"
            margin="30px"
            fontWeight="Regular"
            _hover={{}}
            onClick={skipInstruction}
          >
            Saltar Explicación
          </Button>
          <Button
            color="black"
            bg="#82BF3F"
            height="33px"
            width="106"
            margin="30px"
            fontWeight="Regular"
            _hover={{}}
            onClick={nextInstruction}
          >
            Continuar
            <ChevronRightIcon w="6" h="6" color="black"></ChevronRightIcon>
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default GameInstructions;
