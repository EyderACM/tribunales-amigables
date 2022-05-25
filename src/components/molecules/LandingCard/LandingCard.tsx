import React from "react";
import { Button, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ButtonAction from "components/atoms/ButtonAction/ButtonAction";
import { Link } from "components/atoms/Link";

interface ILandingCard {
  title: string;
  text: string;
  imgUrl?: string;
  href?: string;
}

const LandingCard = ({
  title,
  text,
  imgUrl = "https://via.placeholder.com/260x165",
  href,
}: ILandingCard) => {
  return (
    <Stack
      bgColor="social.lightPurple"
      maxW="400px"
      align="center"
      fontSize={{ md: "24px" }}
      borderRadius="18px"
      textAlign="center"
      pt="1rem"
      pb="2rem"
    >
      <Heading as="h3">{title}</Heading>
      <Divider color="#AF9CC7" />
      <Image src={imgUrl} />
      <Text p="1rem 2.5rem">{text}</Text>
      <Link href={href || "#"} textDecoration="none !important" w="100%">
        <ButtonAction px="4rem" w="60%">
          ¡Jugar!
        </ButtonAction>
      </Link>
    </Stack>
  );
};

export default LandingCard;
