import IBinaryQuestion from "interfaces/IBinaryQuestion";
import IBinaryQuestionResult from "interfaces/IBinaryQuestionResult";

const generateResultsData = (questionsData: IBinaryQuestion[]) => {
  const resultsData: IBinaryQuestionResult[] = questionsData.map(
    (question) => ({
      questionId: question.id,
      answer: question.answer,
      description: question.description,
      questionIsAnswered: question.isAnswered,
      answerWasCorrect: question.answerWasCorrect,
    })
  );

  return resultsData;
};

export default generateResultsData;
