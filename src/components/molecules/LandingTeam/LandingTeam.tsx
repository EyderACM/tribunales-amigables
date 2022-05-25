import React from 'react'
import {
  Box,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react'

const LandingTeam = () => {
  return (
    <Stack
      align="center"
      bgColor="social.green"
      py={{ base: '10rem', md: '15rem', '2xl': '20rem' }}
      h="50%"
      pos="relative"
    >
      <Image
        src="/images/waves.svg"
        transform="rotate(180deg)"
        pos="absolute"
        objectFit="cover"
        w="100%"
        top="-1"
      />
      <Image src="/images/waves.svg" pos="absolute" w="100%" bottom="-1" />
      <Stack
        color="social.white"
        spacing="4rem"
        maxW={{ base: '80%', md: '90%' }}
      >
        <Heading textAlign="center">¡Conoce a los Amigos Tribunal!</Heading>
        <Stack spacing="3rem" direction={{ base: 'column', md: 'row' }}>
          <Box>
            <Image src="https://via.placeholder.com/400" borderRadius="37px" />
          </Box>
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
  )
}

export default LandingTeam
