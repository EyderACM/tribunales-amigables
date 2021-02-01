export default interface IBinaryQuestionResult {
  questionId: number;
  answer: string;
  description: string;
  questionIsAnswered: boolean;
  answerWasCorrect: boolean;
}
