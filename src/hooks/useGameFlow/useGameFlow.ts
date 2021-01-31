import { useState } from "react";

interface IUseGameFlow {
  showInstructions?: boolean;
}

export const useGameFlow = ({ showInstructions = true }: IUseGameFlow = {}) => {
  const [inInstructionView, setInInstructionView] = useState(showInstructions);
  const [inGameView, setInGameView] = useState(showInstructions ? false : true);
  const [inResultsView, setInResultsView] = useState(false);

  const changeToInstructionsView = () => {
    setInResultsView(false);
    setInGameView(false);
    setInInstructionView(true);
  };

  const changeToGameView = () => {
    setInInstructionView(false);
    setInResultsView(false);
    setInGameView(true);
  };

  const changeToResultsView = () => {
    setInGameView(false);
    setInInstructionView(false);
    setInResultsView(true);
  };

  return {
    changeToGameView,
    changeToInstructionsView,
    changeToResultsView,
    inInstructionView,
    inGameView,
    inResultsView,
  };
};
