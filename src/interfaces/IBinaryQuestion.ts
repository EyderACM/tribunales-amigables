export default interface IBinaryQuestion {
  description: string;
  correctAnswer: string;
  incorrectAnswer: string;
  isAnswered: boolean;
  answerWasCorrect: boolean;
}
