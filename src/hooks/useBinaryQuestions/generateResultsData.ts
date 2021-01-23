import IBinaryQuestion from "interfaces/IBinaryQuestion";
import IBinaryQuestionResult from "interfaces/IBinaryQuestionResult";

const generateResultsData = (questionsData: IBinaryQuestion[]) => {
  const resultsData: IBinaryQuestionResult[] = questionsData.map(
    (question) => ({
      description: question.description,
      questionIsAnswered: question.isAnswered,
      answerWasCorrect: question.answerWasCorrect,
    })
  );

  return resultsData;
};

export default generateResultsData;
