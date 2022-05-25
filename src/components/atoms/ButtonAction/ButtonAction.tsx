import { ButtonProps, Button, Image } from "@chakra-ui/react";
import { FC } from "react";

const ButtonAction: FC<ButtonProps> = ({ children, ...restOfProps }) => {
  return (
    <Button
      p="1.5rem"
      fontSize={{ md: "24px" }}
      bgColor="social.green"
      color="social.white"
      boxShadow="0px 5px 0px 0px rgba(98,144,94,0.75)"
      {...restOfProps}
    >
      {children}
    </Button>
  );
};

export default ButtonAction;
