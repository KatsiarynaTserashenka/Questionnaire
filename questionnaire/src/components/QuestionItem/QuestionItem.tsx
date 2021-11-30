import React, { FC, useState } from 'react';
import { data } from '../../constants/data';
import Button from '../Button';

const QuestionItem: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [endOfTest, setEndOfTest] = useState(false);
  const answers = data.questions[currentQuestion].answers;

  const showNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion === data.questions.length - 1) {
      setEndOfTest(true);
    }
  };

  return (
    <div className="questionsItem">
      <h3>{data.questions[currentQuestion].quest}</h3>
      {answers ? (
        answers.map((answer) => (
          <div>
            <input type={data.questions[currentQuestion].answerType} />
            <span>{answer.answer}</span>
          </div>
        ))
      ) : (
        <input type={data.questions[currentQuestion].answerType} />
      )}

      {endOfTest ? (
        <Button text={data.nameFinishButton} />
      ) : (
        <Button text={data.nameNextButton} onClick={showNextQuestion} />
      )}
    </div>
  );
};

export default QuestionItem;
