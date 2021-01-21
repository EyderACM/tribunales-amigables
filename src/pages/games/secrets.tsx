import { SecretsGameProvider } from "src/components/context/SecretsGameProvider";
import { SecretsGameView } from "src/components/organisms/SecretsGameView";
import IBinaryQuestion from "src/interfaces/IBinaryQuestion";

const testQuestionsData: IBinaryQuestion[] = [
  {
    description: "question 1",
    correctAnswer: "correct answer",
    incorrectAnswer: "incorrect answer",
    isAnswered: false,
    answerWasCorrect: false,
  },
  {
    description: "question 2",
    correctAnswer: "correct answer",
    incorrectAnswer: "incorrect answer",
    isAnswered: false,
    answerWasCorrect: false,
  },
  {
    description: "question 3",
    correctAnswer: "correct answer",
    incorrectAnswer: "incorrect answer",
    isAnswered: false,
    answerWasCorrect: false,
  },
];

const Secrets = () => {
  return (
    <SecretsGameProvider initialQuestionsData={testQuestionsData}>
      <SecretsGameView />
    </SecretsGameProvider>
  );
};

export default Secrets;
