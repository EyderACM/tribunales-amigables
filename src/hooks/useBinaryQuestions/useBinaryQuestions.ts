import { useState, useEffect } from "react";
import IBinaryQuestion from "interfaces/IBinaryQuestion";
import generateResultsData from "./generateResultsData";
import IBinaryQuestionResult from "interfaces/IBinaryQuestionResult";

interface IQuestionIndexAnswer {
  questionIndex: number;
  answer: string;
  time?: number;
}

interface IUseBinaryQuestionsReturn {
  questions: IBinaryQuestion[];
  results: IBinaryQuestionResult[];
  checkIfAnswerIsCorrect: (params: IQuestionIndexAnswer) => boolean;
  saveAnswer: (params: IQuestionIndexAnswer) => void;
}

export const useBinaryQuestions = (
  initialQuestionsData: IBinaryQuestion[]
): IUseBinaryQuestionsReturn => {
  const [questions, setQuestions] = useState(initialQuestionsData);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const initialResultsData = generateResultsData(questions);
    setResults(initialResultsData);
  }, [questions]);

  const saveAnswer = ({ questionIndex, answer, time }: IQuestionIndexAnswer) => {
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
          time
        };
      }

      return question;
    });

    setQuestions(updatedQuestionsData);
  };

  const checkIfAnswerIsCorrect = ({
    questionIndex,
    answer,
  }: IQuestionIndexAnswer): boolean => {
    const question = questions[questionIndex];

    if (question.answer === answer) {
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
