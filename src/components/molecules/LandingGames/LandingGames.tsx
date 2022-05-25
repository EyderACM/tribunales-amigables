import React from "react";
import { Stack, Image } from "@chakra-ui/react";
import LandingCard from "../LandingCard/LandingCard";

const LandingGames = () => {
  return (
    <Stack
      py="6rem"
      pb="500px"
      bgColor="social.purple"
      align="center"
      pos="relative"
      backgroundImage="images/gamesBackground.png"
      objectFit="cover"
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        justify="space-around"
        maxW={{ base: "80%", md: "90%" }}
        spacing="3rem"
      >
        <LandingCard
          title="Tu cuerpo"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusantium at aperiam esse odio facilis voluptatum similique. At, dolor
            vel?"
          imgUrl="images/tuCuerpoThumbnail.png"
        />
        <LandingCard
          title="Secretos"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusantium at aperiam esse odio facilis voluptatum similique. At, dolor
            vel?"
          imgUrl="images/secretsThumbnail.png"
        />
        <LandingCard
          title="Explora el tribunal"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusantium at aperiam esse odio facilis voluptatum similique. At, dolor
            vel?"
          imgUrl="images/exploraTribunalThumbnail.png"
        />
      </Stack>
      <Image
        src="/images/greenWaves.svg"
        pos="absolute"
        objectFit="cover"
        w="100%"
        bottom="0"
      />
    </Stack>
  );
};

export default LandingGames;
