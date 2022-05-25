import React from "react";
import { Box, Center, Stack, Text, Image } from "@chakra-ui/react";

interface INavItem {
  text: string;
  isSelected?: boolean;
  imgSrc?: string;
}

const NavItem = ({ text, isSelected = false, imgSrc = "" }: INavItem) => {
  return (
    <Box
      _hover={{
        "span:first-of-type": {
          bgColor: "social.yellow",
          borderColor: "social.yellow",
        },
        "span:last-of-type": { bgColor: "social.darkYellow" },
      }}
      _focus={{
        "span:first-of-type": {
          bgColor: "social.yellow",
          borderColor: "social.yellow",
        },
        "span:last-of-type": { bgColor: "social.darkYellow" },
      }}
      sx={
        isSelected && {
          "span:first-of-type": {
            bgColor: "social.yellow",
            borderColor: "social.yellow",
          },
          "span:last-of-type": { bgColor: "social.darkYellow" },
        }
      }
    >
      <Stack align="center" spacing=".75rem">
        <Box pos="relative" w="56.71px" h="56.71px">
          <Center
            as="span"
            p=".5rem"
            bgColor="social.purple"
            border=".5px solid #7943B8"
            w="56.71px"
            h="56.71px"
            borderRadius="50%"
            pos="absolute"
            transition=".3s"
            zIndex="1"
          >
            <Image src={imgSrc} />
          </Center>
          <Box
            as="span"
            bgColor="social.shadowPurple"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="50%"
            p=".5rem"
            w="56.71px"
            h="56.71px"
            pos="absolute"
            transition=".2s"
            top="1"
          />
        </Box>
        <Text color="social.white" fontSize="18px" fontFamily="Acme">
          {text}
        </Text>
      </Stack>
    </Box>
  );
};

export default NavItem;
