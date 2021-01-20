import { Center, Heading, Box, Text } from "@chakra-ui/react";

//InstrucionCard
const InstrucionCard = ({ title, information }) => {
  return (
    <Center>
      <Box
        width="80%"
        h="500px"
        bg="#DFDFDF"
        borderWidth="10px"
        borderColor="#C4C4C4"
        borderRadius="10px"
      >
        <Center>
          <Heading>{title}</Heading>
        </Center>
        <Center>
          <Text width="100%" align="center" fontSize="28px">
            {information}
          </Text>
        </Center>
      </Box>
    </Center>
  );
};

export default InstrucionCard;
