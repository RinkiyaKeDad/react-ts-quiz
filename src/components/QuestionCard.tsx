import React from 'react';
import { AnswerObject } from '../App';

type PropDetails = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<PropDetails> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div>
      <p>
        Question: {questionNr}/{totalQuestions}
      </p>
      <p>{question}</p>
      <div>
        {answers.map(answer => (
          <div key={answer}>
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span>{answer}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
