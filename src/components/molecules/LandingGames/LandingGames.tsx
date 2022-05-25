import React from 'react'
import { Stack } from '@chakra-ui/react'
import LandingCard from '../LandingCard/LandingCard'

const LandingGames = () => {
  return (
    <Stack py="6rem" bgColor="social.purple" align="center" pos="relative">
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        justify="space-around"
        maxW={{ base: '80%', md: '90%' }}
        spacing="3rem"
      >
        <LandingCard
          title="Tu cuerpo"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusantium at aperiam esse odio facilis voluptatum similique. At, dolor
            vel?"
        />
        <LandingCard
          title="Secretos"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusantium at aperiam esse odio facilis voluptatum similique. At, dolor
            vel?"
        />
        <LandingCard
          title="Explora el tribunal"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusantium at aperiam esse odio facilis voluptatum similique. At, dolor
            vel?"
        />
      </Stack>
    </Stack>
  )
}

export default LandingGames
