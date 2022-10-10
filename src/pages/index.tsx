import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import LandingHeader from "components/molecules/LandingHeader/LandingHeader";
import LandingTeam from "components/molecules/LandingTeam/LandingTeam";
import LandingGames from "components/molecules/LandingGames/LandingGames";
import LandingHero from "components/molecules/LandingHero/LandingHero";

const Home = () => {
  return (
    <>
      {/* Header */}
      <LandingHeader />
      {/* Hero */}
      <LandingHero />
      {/* Games */}
      <LandingGames />
      {/* Team */}
      <LandingTeam />

      {/* Footer */}
      <Stack
        py="6rem"
        align="center"
        textAlign="center"
        bgColor="social.purple"
        color="social.white"
        spacing="4rem"
      >
        <Text>&#169; 2021 - De Boca en Boca. All rights reserved</Text>
      </Stack>
    </>
  );
};

export default Home;
