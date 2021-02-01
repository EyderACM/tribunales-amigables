import { Input as BaseInput, InputProps } from "@chakra-ui/react";
import { FC, LegacyRef } from "react";

interface IInput extends InputProps {
  inputRef?:
    | React.RefObject<HTMLInputElement>
    | React.ForwardedRef<HTMLInputElement>; // InputProps doesn't extend and instance of ref
}

export const Input: FC<IInput> = ({ children, inputRef, ...restOfProps }) => {
  return (
    <BaseInput color="gray.500" bg="white" ref={inputRef} {...restOfProps}>
      {children}
    </BaseInput>
  );
};
