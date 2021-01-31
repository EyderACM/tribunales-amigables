import { useContext, useState, useEffect } from "react";
import { GameResultsTemplate } from "components/organisms/GameResultsTemplate";
import { SecretsGameContext } from "components/context/SecretsGameProvider";
import { IResult } from "components/molecules/ResultsCard";

export const SecretsGameResults = () => {
  const { results } = useContext(SecretsGameContext);
  const [processedResults, setProcessResults] = useState<IResult[]>([]);

  useEffect(() => {
    const newProcessedResults: IResult[] = results.map((result, index) => {
      let status = "No Respondida";

      if (result.questionIsAnswered) {
        status = result.answerWasCorrect ? "Correcta" : "Mejorar";
      }

      return {
        name: `Pregunta ${index + 1}`,
        status,
      };
    });

    setProcessResults(newProcessedResults);
  }, [results]);

  return <GameResultsTemplate gameName="Secretos" results={processedResults} />;
};
