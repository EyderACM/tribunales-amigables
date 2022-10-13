import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

const LandingTeam = () => {
  const [position, setPosition] = useState(0);

  return (
    <Stack
      id="info"
      align="center"
      bgColor="social.green"
      py="0px"
      pb={{ base: "10rem", md: "15rem", "2xl": "20rem" }}
      h="50%"
      pos="relative"
      backgroundImage="images/backgroundImageTeam.svg"
      backgroundRepeat="no-repeat"
      backgroundPosition="100%"
    >
      <Image src="/images/waves.svg" pos="absolute" w="100%" bottom="-1" />
      <Stack
        color="social.white"
        spacing="4rem"
        maxW={{ base: "80%", md: "90%" }}
      >
        <Heading textAlign="center">¡Conoce a los Amigos Tribunal!</Heading>
        <Stack spacing="3rem" direction={{ base: "column", md: "row" }}>
          <VStack>
            <Box
              alignItems="center"
              display="flex"
              flexDir="row"
              justifyContent="center"
              mb="10px"
            >
              <Button
                variant="unstyled"
                mr={3}
                onClick={() => setPosition((prev) => (prev ? prev - 1 : 0))}
              >
                <Image src="images/leftButton.svg" />
              </Button>
              <Image src="images/doctor.png" borderRadius="37px" />
              <Button
                variant="unstyled"
                ml={3}
                onClick={() => setPosition((prev) => prev + 1)}
              >
                <Image src="images/rightButton.svg" />
              </Button>
            </Box>
            <HStack gap={1}>
              {[...Array(4)].map((character) => (
                <Image width="65px" src="images/characterSlide.svg" />
              ))}
            </HStack>
          </VStack>
          <Stack maxW="400px">
            <Heading as="h3">Psicóloga</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nulla
              vel officiis. Provident soluta nemo eveniet possimus nostrum aut
              placeat.
            </Text>
            <Text>¿Qué hace?</Text>
            <UnorderedList>
              <ListItem ml="2rem">Lorem ipsum dolor sit amet</ListItem>
              <ListItem ml="2rem">Consectetur adipiscing elit</ListItem>
              <ListItem ml="2rem">Integer molestie lorem at massa</ListItem>
              <ListItem ml="2rem">Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LandingTeam;
