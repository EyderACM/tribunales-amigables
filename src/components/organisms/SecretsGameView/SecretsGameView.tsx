import { useContext, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { SecretsGameContext } from "src/components/context/SecretsGameProvider";

export const SecretsGameView = () => {
  const {
    currentQuestion,
    changeToNextQuestion,
    changeToPreviusQuestion,
  } = useContext(SecretsGameContext);

  useEffect(() => {
    console.log(currentQuestion);
  }, [currentQuestion]);

  return (
    <>
      <div>Secrets View</div>
      <Button onClick={changeToPreviusQuestion}>previus</Button>
      <Button onClick={changeToNextQuestion}>next</Button>
    </>
  );
};
