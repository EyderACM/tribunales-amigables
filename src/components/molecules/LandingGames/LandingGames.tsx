import React from "react";
import { Stack, Image } from "@chakra-ui/react";
import LandingCard from "../LandingCard/LandingCard";

const LandingGames = () => {
  return (
    <Stack
      id="games"
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
          text="En esta sección, se presenta una breve descripción de lo que son partes públicas y privadas para cada persona."
          imgUrl="images/tuCuerpoThumbnail.png"
        />
        <LandingCard
          title="Secretos"
          text="El funcionamiento de la dinámica de esta sección, se da a través de escoger un candado cuando es un secreto malo y una llave cuando es un secreto bueno."
          imgUrl="images/secretsThumbnail.png"
          href="/games/secrets"
        />
        <LandingCard
          title="Explora el tribunal"
          text="En esta actividad aprenderás todos lo que corresponde a los tribunales por medio de divertidas actividades y un tour guiado!"
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
