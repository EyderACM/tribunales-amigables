import React from 'react'
import { Button, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import ButtonAction from 'components/atoms/ButtonAction/ButtonAction'

interface ILandingCard {
  title: string
  text: string
}

const LandingCard = ({ title, text }: ILandingCard) => {
  return (
    <Stack
      bgColor="social.lightPurple"
      maxW="400px"
      align="center"
      fontSize={{ md: '24px' }}
      borderRadius="18px"
      textAlign="center"
      pt="1rem"
      pb="2rem"
    >
      <Heading as="h3">{title}</Heading>
      <Divider color="#AF9CC7" />
      <Image src="https://via.placeholder.com/260x165" />
      <Text p="1rem 2.5rem">{text}</Text>
      <ButtonAction px="4rem" w="60%">¡Jugar!</ButtonAction>
    </Stack>
  )
}

export default LandingCard
