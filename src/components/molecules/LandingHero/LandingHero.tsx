import { Heading, HStack, Image, Stack, Text, Box } from "@chakra-ui/react";
import ButtonAction from "components/atoms/ButtonAction/ButtonAction";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LandingHero = () => {
  return (
    <Carousel showThumbs={false}>
      {[...Array(2)].map((e, i) => (
        <Stack pos="relative" h="550px" justify="center" align="center">
          <Image
            src="images/carouselBackground.png"
            pos="absolute"
            objectFit="cover"
            top="0"
            left="0"
            zIndex="-1"
            w="100%"
            h="100%"
          />
          <HStack
            justify="space-around"
            h="100%"
            m="0 !important"
            w={{ base: "90%" }}
            maxW="1270px"
          >
            <Stack
              p={{ base: "3rem", md: "4rem" }}
              maxW={{ base: "90%", md: "500px" }}
              bgColor="social.darkPurple"
              borderRadius="17px"
              spacing="3rem"
              color="social.white"
              align="center"
              boxShadow="18px 14px 0px 0px #D4BFEB"
            >
              <Heading>¡Conoce a Balam!</Heading>
              <Text fontSize="1.25rem">
                Un jaguar muy simpático que será tu guía y compañero
              </Text>
              <ButtonAction px="4rem" w="50%">
                ¡Conocer!
              </ButtonAction>
            </Stack>
            <Image
              mr={{ lg: "-50px! important", xl: "-100px !important" }}
              src="/images/balam.svg"
              maxW={{ base: "300px", lg: "400px" }}
              alignSelf="flex-end"
              display={{ base: "none", md: "block" }}
            />
          </HStack>
        </Stack>
      ))}
    </Carousel>
  );
};

export default LandingHero;
