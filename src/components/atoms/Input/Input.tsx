import { Input as BaseInput, InputProps } from "@chakra-ui/react";
import { FC } from "react";

export const Input: FC<InputProps> = ({ children, ...restOfProps }) => {
  return (
    <BaseInput color="gray.500" bg="white" {...restOfProps}>
      {children}
    </BaseInput>
  );
};
