import { useState, useEffect } from "react";
import IBinaryQuestion from "src/interfaces/IBinaryQuestion";
import generateResultsData from "./generateResultsData";

export const useBinaryQuestions = (initialQuestionsData: IBinaryQuestion[]) => {
  const [questions, setQuestions] = useState(initialQuestionsData);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const initialResultsData = generateResultsData(questions);
    setResults(initialResultsData);
  }, [questions]);

  const saveAnswer = ({
    questionIndex,
    answer,
  }: {
    questionIndex: number;
    answer: string;
  }) => {
    const updatedQuestionsData = questions.map((question, currentIndex) => {
      if (currentIndex === questionIndex) {
        const answerWasCorrect = checkIfAnswerIsCorrect({
          questionIndex,
          answer,
        });

        return {
          ...question,
          isAnswered: true,
          answerWasCorrect,
        };
      }

      return question;
    });

    setQuestions(updatedQuestionsData);
  };

  const checkIfAnswerIsCorrect = ({
    questionIndex,
    answer,
  }: {
    questionIndex: number;
    answer: string;
  }): boolean => {
    const question = questions[questionIndex];

    if (question.correctAnswer === answer) {
      return true;
    }

    return false;
  };

  return {
    questions,
    results,
    checkIfAnswerIsCorrect,
    saveAnswer,
  };
};
