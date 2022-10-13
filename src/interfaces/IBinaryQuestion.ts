export default interface IBinaryQuestion {
  id: number;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  isAnswered: boolean;
  answerWasCorrect: boolean;
  correctAnswer: string;
  incorrectAnswer: string;
  time: number;
}
